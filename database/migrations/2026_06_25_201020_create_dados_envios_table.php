<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('dadosEnvio', function (Blueprint $table) {
            $table->id();
            $table->text('nome');
            $table->string('cpf', 14);
            $table->date('data_nac');
            $table->string('contato', 20);
            $table->string('cep', 9);
            $table->text('logradouro');
            $table->integer('numero');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dadosEnvio');
    }
};
