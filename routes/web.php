<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use App\Http\Controllers\DadosEnvioController;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('welcome');

Route::inertia('/pagamento', 'pagamento')->name('pagamento');

// Rotas para dados de envio
Route::post('/dados-envio', [DadosEnvioController::class, 'store'])->name('dados-envio.store');


