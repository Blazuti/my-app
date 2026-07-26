<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class SyncPayWebhookController extends Controller
{
    public function handleCashIn(Request $request)
    {
        $payload = $request->all();

        // Registre os dados no log para debug
        Log::info('Webhook SyncPay CashIn recebido:', $payload);

        // Exemplo de verificação do status
        if (isset($payload['status']) && $payload['status'] === 'PAID') {
            // Atualize o status da transação/pedido no seu banco de dados
        }

        return response()->json(['status' => 'success'], 200);
    }
}