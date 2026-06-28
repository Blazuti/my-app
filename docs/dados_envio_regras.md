Regras de negócio — Model `dadosEnvio`

Observações iniciais
- A migration atual tem o campo `data_nac` enquanto o model usa `data_nasc`. Recomenda-se alinhar o nome (preferível `data_nasc`).
- A tabela criada chama-se `dadosEnvio` (camelCase). Considere usar snake_case `dados_envios` por convenção Laravel.

Campos e regras

- `id` (PK)
  - Tipo: inteiro auto-increment
  - Regras: gerado pelo sistema; não alterável.

- `nome` (text)
  - Obrigatório: sim
  - Validação: string; remover espaços extras; mínimo 2 caracteres; máximo recomendado 100 caracteres (migration usa TEXT, mas limitar para UX).
  - Formato: permitir letras, apostrofes, hífens e espaços; bloquear caracteres de controle e dígitos isolados em nomes.
  - Regras de negócio: armazenar nome completo; não aceitar apenas sobrenome.

- `cpf` (string 14)
  - Obrigatório: sim
  - Validação: formato `000.000.000-00` ou apenas dígitos (11); ao salvar, gravar num formato único (preferência: somente dígitos no banco) e exibir com máscara.
  - Regras de negócio: deve passar validação de CPF (algoritmo dígito verificador); deve ser único por registro (index único recomendado); bloquear CPFs inválidos conhecidos (ex.: 00000000000).

- `data_nac` / `data_nasc` (date)
  - Obrigatório: sim
  - Validação: data válida; não pode ser futura; formato ISO `YYYY-MM-DD`.
  - Regras de negócio: calcular idade para regras de negócio (ex.: verificar maioridade 18+ quando aplicável); rejeitar datas que indiquem idade irrealista (>150 anos).

- `contato` (string 20)
  - Obrigatório: sim
  - Validação: número de telefone/contato com DDI e DDD opcionais; aceitar formatos com símbolos `+`, espaços, parênteses e hífen; armazenar em formato canônico (apenas dígitos) para buscas.
  - Regras de negócio: validar comprimento mínimo (8 dígitos) e máximo (15 dígitos incluindo DDI); evitar aceitar apenas números curtos ou códigos de ramal sem contexto.

- `cep` (string 9)
  - Obrigatório: sim
  - Validação: formato `NNNNN-NNN` ou 8 dígitos; armazenar sem máscara (8 dígitos) e exibir com máscara quando necessário.
  - Regras de negócio: validar existência opcionalmente via API dos Correios/serviço externo; bloquear CEPs inválidos/placeholder.

- `logradouro` (text)
  - Obrigatório: sim
  - Validação: string; remover espaços extras; máximo recomendado 255 caracteres.
  - Regras de negócio: aceitar nomes de rua, avenidas, praças etc.; não aceitar valores genéricos tipo apenas `--`.

- `numero` (integer)
  - Obrigatório: sim (conforme migration)
  - Validação: inteiro positivo; caso não exista número ("s/n"), considerar opção de alterar o campo para `string` ou permitir `numero` nullable e usar campo `complemento` para texto.
  - Regras de negócio: números maiores que 0; validar limites razoáveis (ex.: < 100000).

- `created_at`, `updated_at` (timestamps)
  - Gerenciados pelo framework (Eloquent);
  - Regras: não permitidos updates manuais sem justificativa; usados para auditoria.

Recomendações operacionais
- Unicidade: criar índice único em `cpf` para evitar duplicatas.
- Normalização: gravar campos críticos (CPF, CEP, contato) em formato canônico (apenas dígitos) e aplicar máscaras apenas na exibição.
- Erros e mensagens: retornar mensagens de validação claras (ex.: "CPF inválido", "Data de nascimento não pode ser futura").
- Internacionalização: utilizar regras flexíveis para `contato` se houver suporte a contatos internacionais.
- Ajustes no schema: alinhar `data_nac` para `data_nasc` no migration ou no model para evitar bugs.

Sugestão de validações Laravel (exemplo simplificado para um FormRequest)
- `nome` => `required|string|min:2|max:100`
- `cpf` => `required|string|cpf|unique:dadosEnvio,cpf`
- `data_nasc` => `required|date|before_or_equal:today|after:1900-01-01`
- `contato` => `required|string|min:8|max:20`
- `cep` => `required|string|regex:/^\d{5}-?\d{3}$/`
- `logradouro` => `required|string|max:255`
- `numero` => `required|integer|min:1|max:99999`

Se desejar, posso:
- Gerar um `FormRequest` com essas regras pronto para uso em `app/Http/Requests`.
- Corrigir o nome do campo (`data_nac` → `data_nasc`) e sugerir migração de correção.
