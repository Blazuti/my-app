namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;

class SyncPayService
{
    protected string $baseUrl;
    protected string $clientId;
    protected string $clientSecret;

    public function __construct()
    {
        $this->baseUrl = config('services.syncpay.base_url', 'https://api.syncpay.com.br');
        $this->clientId = config('services.syncpay.client_id');
        $this->clientSecret = config('services.syncpay.client_secret');
    }

    /**
     * Obtém o token de autenticação (com cache de 55 minutos para reutilizar)
     */
    public function getAccessToken(): string
    {
        return Cache::remember('syncpay_access_token', 3300, function () {
            $response = Http::post("{$this->baseUrl}/api/partner/v1/auth-token", [
                'client_id' => $this->clientId,
                'client_secret' => $this->clientSecret,
            ]);

            if ($response->failed()) {
                throw new \Exception('Falha ao autenticar na SyncPay: ' . $response->body());
            }

            return $response->json('access_token');
        });
    }

    /**
     * Exemplo: Solicitar depósito via Pix (CashIn)
     */
    public function createPixDeposit(array $data)
    {
        $token = $this->getAccessToken();

        $response = Http::withToken($token)
            ->post("{$this->baseUrl}/api/partner/v1/pix/cashin", $data);

        return $response->json();
    }
}