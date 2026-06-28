<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class DadosEnvioRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation(): void
    {
        $this->merge([
            'cpf' => isset($this->cpf) ? preg_replace('/\D/', '', $this->cpf) : null,
            'cep' => isset($this->cep) ? preg_replace('/\D/', '', $this->cep) : null,
            'contato' => isset($this->contato) ? preg_replace('/\D/', '', $this->contato) : null,
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        $cpfUnique = Rule::unique('dadosEnvio', 'cpf');
        if ($this->route('dadosEnvio')) {
            $cpfUnique = $cpfUnique->ignore($this->route('dadosEnvio')->id ?? null);
        }

        return [
            'nome' => ['required', 'string', 'min:2', 'max:100'],
            'cpf' => array_merge(['required', 'digits:11'], [$cpfUnique]),
            'data_nasc' => ['required', 'date', 'before_or_equal:today', 'after:1870-01-01'],
            'contato' => ['required', 'digits_between:8,15'],
            'cep' => ['required', 'digits:8'],
            'logradouro' => ['required', 'string', 'max:255'],
            'numero' => ['required', 'integer', 'min:1', 'max:99999'],
        ];
    }

    /**
     * Add after-validation checks.
     */
    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            if ($this->cpf && ! $this->validCpf($this->cpf)) {
                $validator->errors()->add('cpf', 'CPF inválido.');
            }
        });
    }

    /**
     * Valida CPF pelo dígito verificador.
     */
    private function validCpf(?string $cpf): bool
    {
        if (! $cpf) {
            return false;
        }

        $cpf = preg_replace('/\D/', '', $cpf);
        if (strlen($cpf) !== 11) {
            return false;
        }

        // Reject known invalid CPFs
        if (preg_match('/^(\d)\1{10}$/', $cpf)) {
            return false;
        }

        for ($t = 9; $t < 11; $t++) {
            $d = 0;
            for ($c = 0; $c < $t; $c++) {
                $d += intval($cpf[$c]) * (($t + 1) - $c);
            }
            $d = ((10 * $d) % 11) % 10;
            if (intval($cpf[$c]) !== $d) {
                return false;
            }
        }

        return true;
    }
}
