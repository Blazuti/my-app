import React, { useState } from 'react';
import Style from './corProduto.module.css';

const opcoesCores = [
    { classe: Style.preto, label: 'Preto' },
    { classe: Style.branco, label: 'Branco' },
    { classe: Style.azul, label: 'Azul' },
    { classe: Style.vermelho, label: 'Vermelho' },
    { classe: Style.verde, label: 'Verde' },
];

export default function CorProduto() {
    const [selecionado, setSelecionado] = useState(null);

    const seleciona = (index) => {
        setSelecionado(index);
    };

    return (
        <section className={Style.containerCorProduto}>
            <div className={Style.corProduto}>
                <span className={Style.cor}>Cor:</span>
                {opcoesCores.map((cor, index) => (
                    <div
                        key={cor.label}
                        className={`${Style.selecionaCor} ${selecionado === index ? Style.insereBorda : ''}`}
                        onClick={() => seleciona(index)}
                    >
                        <span className={cor.classe}></span>
                        <span>{cor.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
