import React, { useState } from 'react';
import Style from './corProduto.module.css';

const opcoesCores = [
    { classe: Style.icsee, label: 'ICSEE-MICROSD 16GB' },
    { classe: Style.yoosee, label: 'YOOSEE-MICROSD 16GB' },
    
];

export default function CorProduto() {
    const [selecionado, setSelecionado] = useState(null);

    const seleciona = (index) => {
        setSelecionado(index);
    };

    return (
        <section className={Style.containerCorProduto}>
            <div className={Style.corProduto}>
                <span className={Style.cor}>APP:</span>
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
