import { useEffect, useState } from "react";
import Style from "./formaPagamento.module.css";

const initialFormData = {
    amount: "",
    description: "",
    name: "",
    cpf: "",
    email: "",
    phone: "",
};

const opcoesPagamento = [
    {
        id: "cartao",
        label: "Cartão",
        descricao: "Visa, Mastercard e mais",
        icone: "💳",
    },
    {
        id: "pix",
        label: "Pix",
        descricao: "Pagamento instantâneo",
        icone: "📱",
    },
    {
        id: "link",
        label: "Link de pagamento",
        descricao: "Para esterilização",
        icone: "🔗",
    },
];

export default function FormaPagamento({ valor = 0, dadosEnvio = {} }) {
    const [formaSelecionada, setFormaSelecionada] = useState("pix");
    const [mostrarDetalhes, setMostrarDetalhes] = useState(true);
    const [pixFormData, setPixFormData] = useState({ ...initialFormData, amount: String(valor || "") });
    const [statusMessage, setStatusMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [mostrarModalCartao, setMostrarModalCartao] = useState(false);
    const [cardFormData, setCardFormData] = useState({
        amount: String(valor || ""),
        card_holder: "",
        card_number: "",
        card_expiry: "",
        card_cvv: "",
    });
    
    // CORREÇÃO: Renomeado para dadosEnvioEstado para não conflitar com a prop dadosEnvio
    const [dadosEnvioEstado, setDadosEnvioEstado] = useState({
        nome: '',
        cpf: '',
        cep: '',
        email: '',
        contato:'',
    });

    useEffect(() => {
        const carregarResumo = () => {
            if (typeof window === 'undefined') return;

            try {
                const salvo = JSON.parse(
                    localStorage.getItem('dadosEnvioResumo') || '{}',
                );
                setDadosEnvioEstado({
                    nome: salvo.nome || '',
                    cpf: salvo.cpf || '',
                    cep: salvo.cep || '',
                    email: salvo.email || '',
                    contato: salvo.contato || '',
                });
            } catch (error) {
                console.error('Erro ao carregar resumo:', error);
            }
        };

        carregarResumo();
        window.addEventListener('dados-envio-salvo', carregarResumo);

        return () => {
            window.removeEventListener('dados-envio-salvo', carregarResumo);
        };
    }, []);

    // Sincroniza tanto o valor quanto os dados vindos da prop dadosEnvio
    useEffect(() => {
        const valorAtual = String(valor || "");

        setPixFormData((prev) => ({
            ...prev,
            amount: valorAtual,
            name: dadosEnvio.nome || prev.name || "",
            cpf: dadosEnvio.cpf || prev.cpf || "",
            email: dadosEnvio.email || prev.email || "",
            phone: dadosEnvio.celular || prev.phone || "",
        }));

        setCardFormData((prev) => ({
            ...prev,
            amount: valorAtual,
        }));
    }, [valor, dadosEnvio]);

    const handleSelecionarForma = (forma) => {
        setFormaSelecionada(forma);
        setMostrarDetalhes(true);

        if (forma === "cartao") {
            setMostrarModalCartao(true);
        } else {
            setMostrarModalCartao(false);
        }
    };

    const handlePixInputChange = (event) => {
        const { name, value } = event.target;
        setPixFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCardInputChange = (event) => {
        const { name, value } = event.target;
        setCardFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePixSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatusMessage("");

        const csrf = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

        try {
            const response = await fetch('/syncpay/pix/cash-in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': csrf || '',
                },
                body: JSON.stringify({
                    amount: Number(pixFormData.amount),
                    description: pixFormData.description || 'Pagamento via app',
                    name: pixFormData.name,
                    cpf: pixFormData.cpf.replace(/\D/g, ''),
                    email: pixFormData.email,
                    phone: pixFormData.phone.replace(/\D/g, ''),
                }),
            });

            const data = await response.json().catch(() => null);

            if (!response.ok) {
                throw new Error(data?.message || 'Erro ao criar cobrança Pix');
            }

            setStatusMessage(`Cobrança criada com sucesso. Identificador: ${data?.identifier || 'não informado'}`);
        } catch (error) {
            setStatusMessage(error.message || 'Erro inesperado ao criar cobrança Pix');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCardSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatusMessage("");

        const csrf = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

        try {
            const response = await fetch('/syncpay/card/validate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': csrf || '',
                },
                body: JSON.stringify({
                    amount: Number(cardFormData.amount),
                    card_holder: cardFormData.card_holder,
                    card_number: cardFormData.card_number.replace(/\D/g, ''),
                    card_expiry: cardFormData.card_expiry,
                    card_cvv: cardFormData.card_cvv,
                }),
            });

            const data = await response.json().catch(() => null);

            if (!response.ok) {
                throw new Error(data?.message || 'Erro ao validar pagamento com cartão');
            }

            setStatusMessage(`Pagamento autorizado. Identificador: ${data?.identifier || 'não informado'}`);
            setMostrarModalCartao(false);
        } catch (error) {
            setStatusMessage(error.message || 'Erro inesperado ao validar pagamento com cartão');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={Style.container} aria-label="Formas de pagamento">
            <div className={Style.header}>
                <div>
                    <p className={Style.eyebrow}>Pagamento</p>
                    <h4>Escolha a forma de pagamento</h4>
                </div>
                <span className={Style.badge}>Seguro</span>
            </div>

            <div className={Style.listaOpcoes}>
                {opcoesPagamento.map((opcao) => {
                    const selecionado = formaSelecionada === opcao.id;

                    return (
                        <label
                            key={opcao.id}
                            className={`${Style.opcao} ${selecionado ? Style.opcaoSelecionada : ""}`}
                        >
                            <input
                                type="radio"
                                name="forma-pagamento"
                                value={opcao.id}
                                checked={selecionado}
                                onChange={() => handleSelecionarForma(opcao.id)}
                                className={Style.radioInput}
                            />
                            <span className={Style.radioVisual} aria-hidden="true" />
                            <span className={Style.conteudo}>
                                <span className={Style.icone}>{opcao.icone}</span>
                                <span className={Style.texto}>
                                    <strong>{opcao.label}</strong>
                                    <small>{opcao.descricao}</small>
                                </span>
                            </span>
                        </label>
                    );
                })}
            </div>

            {mostrarDetalhes && (
                <div className={Style.panelDetalhes} aria-live="polite">
                    <div className={Style.panelHeader}>
                        <h5>Dados para {opcoesPagamento.find((opcao) => opcao.id === formaSelecionada)?.label}</h5>
                        <p>Complete as informações abaixo para continuar.</p>
                    </div>

                    {formaSelecionada === "cartao" ? (
                        <div className={Style.formGrid}>
                            <div className={Style.infoBox}>Os dados do cartão serão informados no modal abaixo.</div>
                            <button
                                type="button"
                                className={Style.botaoConcluir}
                                onClick={() => setMostrarModalCartao(true)}
                            >
                                Informar dados do cartão
                            </button>
                        </div>
                    ) : formaSelecionada === "pix" ? (
                        <form className={Style.formGrid} onSubmit={handlePixSubmit}>
                            <div className={Style.qrBox} aria-label="QR Code para pagamento via Pix">
                                QR CODE
                            </div>

                            <label className={Style.field}>
                                <span>Valor</span>
                                <input
                                    type="number"
                                    name="amount"
                                    min="1"
                                    step="0.01"
                                    placeholder="Ex.: 14.67"
                                    value={pixFormData.amount}
                                    onChange={handlePixInputChange}
                                    readOnly
                                    required
                                />
                            </label>

                            <label className={Style.field}>
                                <span>Descrição</span>
                                <input
                                    type="text"
                                    name="description"
                                    placeholder="Descrição da cobrança"
                                    value={pixFormData.description}
                                    onChange={handlePixInputChange}
                                />
                            </label>

                            <label className={Style.field}>
                                <span>Nome completo</span>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Seu nome"
                                    value={dadosEnvioEstado.nome}
                                    onChange={handlePixInputChange}
                                    readOnly
                                    required
                                />
                            </label>

                            <label className={Style.field}>
                                <span>CPF</span>
                                <input
                                    type="text"
                                    name="cpf"
                                    placeholder="000.000.000-00"
                                    value={dadosEnvioEstado.cpf}
                                    onChange={handlePixInputChange}
                                    readOnly
                                    required
                                />
                            </label>

                            <label className={Style.field}>
                                <span>E-mail</span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="seu@email.com"
                                    value={dadosEnvioEstado.email}
                                    onChange={handlePixInputChange}
                                    readOnly
                                    required
                                />
                            </label>

                            <label className={Style.field}>
                                <span>Telefone</span>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="(11) 99999-9999"
                                    value={dadosEnvioEstado.celular}
                                    onChange={handlePixInputChange}
                                    required
                                />
                            </label>

                            <button type="submit" className={Style.botaoConcluir} disabled={isSubmitting}>
                                {isSubmitting ? 'Enviando...' : 'Gerar cobrança Pix'}
                            </button>

                            {statusMessage ? <div className={Style.infoBox}>{statusMessage}</div> : null}
                        </form>
                    ) : (
                        <div className={Style.formGrid}>
                            <label className={Style.field}>
                                <span>Link de pagamento</span>
                                <input type="text" placeholder="Cole o link aqui" />
                            </label>
                            <label className={Style.field}>
                                <span>E-mail para envio</span>
                                <input type="email" placeholder="seu@email.com" />
                            </label>
                            <div className={Style.infoBox}>O link será enviado para o e-mail informado.</div>
                        </div>
                    )}
                </div>
            )}

            {mostrarModalCartao && (
                <div className={Style.modalOverlay} role="dialog" aria-modal="true" aria-label="Dados do cartão">
                    <div className={Style.modalContent}>
                        <div className={Style.modalHeader}>
                            <h5>Dados do cartão</h5>
                            <button
                                type="button"
                                className={Style.modalClose}
                                onClick={() => setMostrarModalCartao(false)}
                                aria-label="Fechar modal"
                            >
                                ×
                            </button>
                        </div>

                        <form className={Style.formGrid} onSubmit={handleCardSubmit}>
                            <label className={Style.field}>
                                <span>Valor</span>
                                <input
                                    type="number"
                                    name="amount"
                                    min="1"
                                    step="0.01"
                                    placeholder="Ex.: 199.90"
                                    value={cardFormData.amount}
                                    onChange={handleCardInputChange}
                                    readOnly
                                    required
                                />
                            </label>

                            <label className={Style.field}>
                                <span>Nome no cartão</span>
                                <input
                                    type="text"
                                    name="card_holder"
                                    placeholder="Ex.: João da Silva"
                                    value={cardFormData.card_holder}
                                    onChange={handleCardInputChange}
                                    required
                                />
                            </label>

                            <label className={Style.field}>
                                <span>Número do cartão</span>
                                <input
                                    type="text"
                                    name="card_number"
                                    placeholder="0000 0000 0000 0000"
                                    value={cardFormData.card_number}
                                    onChange={handleCardInputChange}
                                    required
                                />
                            </label>

                            <div className={Style.duplaColuna}>
                                <label className={Style.field}>
                                    <span>Validade</span>
                                    <input
                                        type="text"
                                        name="card_expiry"
                                        placeholder="MM/AA"
                                        value={cardFormData.card_expiry}
                                        onChange={handleCardInputChange}
                                        required
                                    />
                                </label>
                                <label className={Style.field}>
                                    <span>CVV</span>
                                    <input
                                        type="text"
                                        name="card_cvv"
                                        placeholder="123"
                                        value={cardFormData.card_cvv}
                                        onChange={handleCardInputChange}
                                        required
                                    />
                                </label>
                            </div>

                            <button type="submit" className={Style.botaoConcluir} disabled={isSubmitting}>
                                {isSubmitting ? 'Validando...' : 'Concluir pagamento'}
                            </button>

                            {statusMessage ? <div className={Style.infoBox}>{statusMessage}</div> : null}
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}