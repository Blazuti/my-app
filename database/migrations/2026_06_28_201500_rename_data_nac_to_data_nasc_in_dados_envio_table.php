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
        Schema::table('dadosEnvio', function (Blueprint $table) {
            if (Schema::hasColumn('dadosEnvio', 'data_nac')) {
                $table->renameColumn('data_nac', 'data_nasc');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('dadosEnvio', function (Blueprint $table) {
            if (Schema::hasColumn('dadosEnvio', 'data_nasc')) {
                $table->renameColumn('data_nasc', 'data_nac');
            }
        });
    }
};
