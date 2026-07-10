import React, { useEffect, useState } from 'react';
import Style from './finalizaPagamento_desk.module.css';
import { InfoProduto } from '@/infoProduto'; 
import ProdutoIndicado from '../../produtoIndicado/produtoIndicado';
import useAlternaDevice from '@/hooks/alterna_device';
import Rodape from '../../../welcome/rodape/rodape';
import FormaPagamento from '../../formaPagamento/formaPagamento';

const formatarCPF = (valor = '') => {
    const apenasNumeros = String(valor).replace(/\D/g, '').slice(0, 11);
    if (!apenasNumeros) return '';

    return apenasNumeros
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
};

const formatarCEP = (valor = '') => {
    const apenasNumeros = String(valor).replace(/\D/g, '').slice(0, 8);
    if (!apenasNumeros) return '';

    return apenasNumeros.replace(/(\d{5})(\d)/, '$1-$2');
};

export default function FinalizaPagamento({ onEditar }) {
    const [mostrarFormaPagamento, setMostrarFormaPagamento] = useState(false);
    const [dadosEnvio, setDadosEnvio] = useState({
        nome: '',
        cpf: '',
        cep: '',
        email: '',
    });
    
    // Estado que controla a quantidade e dispara a atualização dos valores
    const [quantidade, setQuantidade] = useState(1);

    useEffect(() => {
        const carregarResumo = () => {
            if (typeof window === 'undefined') return;

            try {
                const salvo = JSON.parse(
                    localStorage.getItem('dadosEnvioResumo') || '{}',
                );
                setDadosEnvio({
                    nome: salvo.nome || '',
                    cpf: salvo.cpf || '',
                    cep: salvo.cep || '',
                    email: salvo.email || '',
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
        
        // Se o campo for esvaziado ou não for um número válido durante a digitação
        if (Number.isNaN(valor) || valor < 1) {
            setQuantidade(1);
            return;
        }
        setQuantidade(valor);
    };

    // Cálculos reativos: atualizam automaticamente a cada mudança de estado da 'quantidade'
    const produtoPreco = Number(InfoProduto.Valor || 0);
    const total = produtoPreco * quantidade;
    const device = useAlternaDevice();

    return (
        <section className={Style.finalizaPagamento}>
            <div className={Style.containerDadosEnvio}>
                <div className={Style.headerResumo}>
                    <h3>Resumo do pedido</h3>
                    <button
                        type="button"
                        className={Style.btnEditar}
                        onClick={onEditar}
                    >
                        Editar dados
                    </button>
                </div>
                <p>
                    <strong>Nome</strong>
                    <span>{dadosEnvio.nome || 'Ainda não informado'}</span>
                </p>
                <p>
                    <strong>Email</strong>
                    <span>{dadosEnvio.email || 'Ainda não informado'}</span>
                </p>
                <p>
                    <strong>CPF</strong>
                    <span>
                        {formatarCPF(dadosEnvio.cpf) || 'Ainda não informado'}
                    </span>
                </p>
                <p>
                    <strong>CEP</strong>
                    <span>
                        {formatarCEP(dadosEnvio.cep) || 'Ainda não informado'}
                    </span>
                </p>
                <div className={Style.frete}>
                    <span className="material-symbols">
                        delivery_truck_speed
                    </span>
                    <span>Frete Grátis</span>
                </div>
            </div>

            <div className={Style.containerInfoProduto}>
                <div className={Style.containerDescricaoProduto}>
                    <img src={InfoProduto.img01} alt="" />
                    <span className={Style.descricaoProduto}>
                        {InfoProduto.DescricaoProduto}
                    </span>
                </div>
                <div className={`${Style.quantidade} ${Style.preco}`}>
                    <span className={Style.preco}>
                        {InfoProduto.Moeda} {InfoProduto.formatoBr(produtoPreco)}
                    </span>
                    <label htmlFor="quantidade" className={Style.srOnly}>
                        Quantidade
                    </label>
                    <input
                        id="quantidade"
                        type="number"
                        min="1"
                        value={quantidade} 
                        onChange={handleQuantidadeChange} 
                        className={Style.quantidadeInput}
                    />
                    {/* Exibição dinâmica do total geral */}
                    <div className={`${Style.total} ${Style.preco}`}>
                        Total: {InfoProduto.Moeda} {InfoProduto.formatoBr(total)}
                    </div>
                </div>
                
                <button 
                    type="button" 
                    className={Style.btnContinuarCompra}
                    onClick={() => setMostrarFormaPagamento(true)}
                >
                    Continuar compra
                </button>
            </div>
            
            <div className={Style.containerFormaPagamento}>
                {mostrarFormaPagamento && (
                    <FormaPagamento valor={Number(total.toFixed(2))} />
                )}
            </div>

            <div className={Style.produtoIndicado}>
                {device === 'mobile' ? null : <ProdutoIndicado />}
            </div>

            {device === 'mobile' ? null : <Rodape />}
        </section>
    );
}