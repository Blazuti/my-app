import React, { useEffect, useState } from "react";
import Style from "./finalizaPagamento_desk.module.css"

export default function finalizaPagamento() {
    const [dadosEnvio, setDadosEnvio] = useState({
        nome: '',
        cpf: '',
        telefone: '',
        cep: '',
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/dados-envio')
            .then((res) => {
                if (!res.ok) throw new Error('Não foi possível carregar os dados');
                return res.json();
            })
            .then((data) => {
                setDadosEnvio({
                    nome: data.nome || '',
                    cpf: data.cpf || '',
                    telefone: data.contato || '',
                    cep: data.cep || '',
                });
            })
            .catch(() => {
                setDadosEnvio({ nome: '', cpf: '', telefone: '', cep: '' });
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <div className={Style.dadosEnvio}>
                <div className={Style.dadosEnvioLinha}>
                    <span><strong>Nome:</strong> {loading ? 'Carregando...' : dadosEnvio.nome || 'Não informado'}</span>
                    <span><strong>CPF:</strong> {loading ? 'Carregando...' : dadosEnvio.cpf || 'Não informado'}</span>
                    <span><strong>Telefone:</strong> {loading ? 'Carregando...' : dadosEnvio.telefone || 'Não informado'}</span>
                    <span><strong>CEP:</strong> {loading ? 'Carregando...' : dadosEnvio.cep || 'Não informado'}</span>
                </div>
            </div>
        </>
    );
}