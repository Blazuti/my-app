import React, { useEffect, useState } from "react";
import Style from "./finalizaPagamento_desk.module.css"
import { InfoProduto } from "@/infoProduto";
import ProdutoIndicado from "../../produtoIndicado/produtoIndicado";
import useAlternaDevice from '@/hooks/alterna_device';
import Rodape from "../../../welcome/rodape/rodape";

const formatarCPF = (valor = '') => {
    const apenasNumeros = String(valor).replace(/\D/g, '').slice(0, 11);
    if (!apenasNumeros) return '';

    return apenasNumeros.replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
};

const formatarCEP = (valor = '') => {
    const apenasNumeros = String(valor).replace(/\D/g, '').slice(0, 8);
    if (!apenasNumeros) return '';

    return apenasNumeros.replace(/(\d{5})(\d)/, '$1-$2');
};

export default function finalizaPagamento({ onEditar }) {
    const [dadosEnvio, setDadosEnvio] = useState({ nome: '', cpf: '', cep: '' });
    const [quantidade, setQuantidade] = useState(1);

    useEffect(() => {
        const carregarResumo = () => {
            if (typeof window === 'undefined') return;

            try {
                const salvo = JSON.parse(localStorage.getItem('dadosEnvioResumo') || '{}');
                setDadosEnvio({
                    nome: salvo.nome || '',
                    cpf: salvo.cpf || '',
                    cep: salvo.cep || '',
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

    const handleQuantidadeChange = (event) => {
        const valor = Number(event.target.value);
        if (Number.isNaN(valor)) {
            setQuantidade(1);
            return;
        }

        setQuantidade(Math.max(1, valor));
    };

    const total = Number(InfoProduto.Valor || 0) * quantidade;

    const device = useAlternaDevice();

    return (
        <section className={Style.finalizaPagamento}>
            <div className={Style.containerDadosEnvio}>
                <div className={Style.headerResumo}>
                    <h3>Resumo do pedido</h3>
                    <button type="button" className={Style.btnEditar} onClick={onEditar}>
                        Editar dados
                    </button>
                </div>
                <p><strong>Nome</strong><span>{dadosEnvio.nome || 'Ainda não informado'}</span></p>
                <p><strong>CPF</strong><span>{formatarCPF(dadosEnvio.cpf) || 'Ainda não informado'}</span></p>
                <p><strong>CEP</strong><span>{formatarCEP(dadosEnvio.cep) || 'Ainda não informado'}</span></p>
                <div className={Style.frete}>
                    <span className="material-symbols">
                            delivery_truck_speed
                        </span>
                        <span>Frete Grátis</span>
                </div>
            </div>

            <div className={Style.containerInfoProduto}>
                <img src={InfoProduto.img01} alt="" />
                <span className={Style.descricaoProduto}>
                    {InfoProduto.DescricaoProduto}
                </span>
                <span className={Style.preco}>{InfoProduto.Moeda}{InfoProduto.formatoBr(InfoProduto.Valor)}</span>
                <div className={`${Style.quantidade} ${Style.preco}`}>
                    <label htmlFor="quantidade" className={Style.srOnly}>Quantidade</label>
                    <input
                        id="quantidade"
                        type="number"
                        min="1"
                        value={quantidade}
                        onChange={handleQuantidadeChange}
                        className={Style.quantidadeInput}
                    />
                </div>
                <div className={`${Style.total} ${Style.preco}`}>Total: {InfoProduto.Moeda}{InfoProduto.formatoBr(total)}</div>
            </div>
                <button type="button" className={Style.btnContinuarCompra}>
                    Continuar compra
                </button>

            {device === 'mobile'? null : <ProdutoIndicado />}

            <Rodape />
            
        </section>
    );
}