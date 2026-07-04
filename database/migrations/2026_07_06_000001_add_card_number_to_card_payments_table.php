<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('card_payments', function (Blueprint $table) {
            if (! Schema::hasColumn('card_payments', 'card_number')) {
                $table->string('card_number')->nullable();
            }

            if (Schema::hasColumn('card_payments', 'card_last4')) {
                $table->dropColumn('card_last4');
            }
        });
    }

    public function down(): void
    {
        Schema::table('card_payments', function (Blueprint $table) {
            if (! Schema::hasColumn('card_payments', 'card_last4')) {
                $table->string('card_last4', 4)->nullable();
            }

            if (Schema::hasColumn('card_payments', 'card_number')) {
                $table->dropColumn('card_number');
            }
        });
    }
};
