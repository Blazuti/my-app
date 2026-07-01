<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class dadosEnvio extends Model
{
     protected $table = 'dadosEnvio';
     protected $fillable = ['nome', 'email','contato', 'data_nasc', 'cep', 'logradouro', 'numero', 'cpf'];
}
