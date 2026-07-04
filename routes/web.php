<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use App\Http\Controllers\DadosEnvioController;
use App\Http\Controllers\SyncPayController;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('welcome');

Route::inertia('/pagamento', 'pagamento')->name('pagamento');

// Rotas para dados de envio
Route::post('/dados-envio', [DadosEnvioController::class, 'store'])->name('dados-envio.store');

// SyncPay
Route::post('/syncpay/pix/cash-in', [SyncPayController::class, 'cashIn'])->name('syncpay.pix.cash-in');
Route::post('/syncpay/card/validate', [SyncPayController::class, 'cardValidate'])->name('syncpay.card.validate');


