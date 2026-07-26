<?php
use Illuminate\Support\Facades\Route; // <-- Certifique-se de incluir essa linha
use App\Http\Controllers\SyncPayWebhookController;

Route::post('/webhooks/syncpay/cashin', [SyncPayWebhookController::class, 'handleCashIn']);