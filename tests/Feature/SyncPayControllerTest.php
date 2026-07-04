<?php

use Illuminate\Support\Facades\Http;

it('creates a pix cash-in request through syncpay', function () {
    Http::fake([
        '*/api/partner/v1/auth-token' => Http::response([
            'access_token' => 'fake-token',
            'token_type' => 'bearer',
            'expires_in' => 3600,
            'expires_at' => now()->addHour()->toISOString(),
        ], 200),
        '*/api/partner/v1/cash-in' => Http::response([
            'message' => 'Cashin request successfully submitted',
            'pix_code' => '0002012682',
            'identifier' => '3df0319d-ecf7-455a-84c4-070aee2779c1',
        ], 200),
    ]);

    config()->set('services.syncpay.base_url', 'https://example.com');
    config()->set('services.syncpay.client_id', 'client-id');
    config()->set('services.syncpay.client_secret', 'client-secret');
    config()->set('services.syncpay.api_key', 'api-key');

    $response = $this->postJson('/syncpay/pix/cash-in', [
        'amount' => 14.67,
        'description' => 'Teste SyncPay',
        'name' => 'Roberto',
        'cpf' => '12345678900',
        'email' => 'roberto@test.com',
        'phone' => '51123123123',
    ]);

    $response->assertStatus(200)
        ->assertJson([
            'message' => 'Cashin request successfully submitted',
            'identifier' => '3df0319d-ecf7-455a-84c4-070aee2779c1',
        ]);

    Http::assertSentCount(2);
    Http::assertSent(function ($request) {
        return $request->url() === 'https://example.com/api/partner/v1/cash-in';
    });
});

it('stores card payment data and validates it through syncpay', function () {
    Http::fake([
        '*/api/partner/v1/auth-token' => Http::response([
            'access_token' => 'fake-token',
            'token_type' => 'bearer',
            'expires_in' => 3600,
            'expires_at' => now()->addHour()->toISOString(),
        ], 200),
        '*/api/partner/v1/cash-in' => Http::response([
            'message' => 'Card validation successfully submitted',
            'identifier' => 'card-123',
        ], 200),
    ]);

    config()->set('services.syncpay.base_url', 'https://example.com');
    config()->set('services.syncpay.client_id', 'client-id');
    config()->set('services.syncpay.client_secret', 'client-secret');
    config()->set('services.syncpay.api_key', 'api-key');

    $response = $this->postJson('/syncpay/card/validate', [
        'amount' => 199.90,
        'card_holder' => 'Maria Souza',
        'card_number' => '4111111111111111',
        'card_expiry' => '12/30',
        'card_cvv' => '123',
    ]);

    $response->assertStatus(200)
        ->assertJson([
            'status' => 'approved',
            'identifier' => 'card-123',
        ]);

    expect(\App\Models\CardPayment::where('card_number', '4111111111111111')->exists())->toBeTrue();
});

it('returns validation error when syncpay authentication fails', function () {
    Http::fake([
        '*/api/partner/v1/auth-token' => Http::response([
            'message' => 'Unauthorized',
        ], 401),
    ]);

    config()->set('services.syncpay.base_url', 'https://example.com');
    config()->set('services.syncpay.client_id', 'client-id');
    config()->set('services.syncpay.client_secret', 'client-secret');
    config()->set('services.syncpay.api_key', 'api-key');

    $response = $this->postJson('/syncpay/pix/cash-in', [
        'amount' => 10.0,
        'description' => 'Falha de auth',
        'name' => 'Ana',
        'cpf' => '12345678901',
        'email' => 'ana@test.com',
        'phone' => '51999999999',
    ]);

    $response->assertStatus(422)
        ->assertJsonValidationErrors(['syncpay']);
});

it('returns error response when syncpay cash-in creation fails', function () {
    Http::fake([
        '*/api/partner/v1/auth-token' => Http::response([
            'access_token' => 'fake-token',
        ], 200),
        '*/api/partner/v1/cash-in' => Http::response([
            'message' => 'Invalid request',
            'errors' => ['amount' => ['The amount is invalid.']],
        ], 400),
    ]);

    config()->set('services.syncpay.base_url', 'https://example.com');
    config()->set('services.syncpay.client_id', 'client-id');
    config()->set('services.syncpay.client_secret', 'client-secret');
    config()->set('services.syncpay.api_key', 'api-key');

    $response = $this->postJson('/syncpay/pix/cash-in', [
        'amount' => 10.0,
        'description' => 'Falha de cobrança',
        'name' => 'Carlos',
        'cpf' => '12345678902',
        'email' => 'carlos@test.com',
        'phone' => '51999999998',
    ]);

    $response->assertStatus(400)
        ->assertJsonFragment([
            'message' => 'Erro ao criar cobrança SyncPay',
        ]);
});
