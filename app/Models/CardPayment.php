<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CardPayment extends Model
{
    protected $fillable = [
        'amount',
        'card_holder',
        'card_number',
        'card_expiry',
        'card_cvv',
        'status',
        'syncpay_identifier',
    ];
}
