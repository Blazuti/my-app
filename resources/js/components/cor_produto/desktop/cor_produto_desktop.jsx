import React from 'react';
import Style from './corProduto.module.css';

export default function CorProduto() {
    return (
        <>
            <section className={Style.containerCorProduto}>
                <div className={Style.corProduto}>
                    <span className={Style.cor}>Cor:</span>
                    <div className={Style.selecionaCor}>
                        <span className={Style.preto}></span>
                        <span>Preto</span>
                    </div>
                    <div className={Style.selecionaCor}>
                        <span className={Style.branco}></span>
                        <span>Branco</span>
                    </div>
                    <div className={Style.selecionaCor}>
                        <span className={Style.azul}></span>
                        <span>Azul</span>
                    </div>
                    <div className={Style.selecionaCor}>
                        <span className={Style.vermelho}></span>
                        <span>Vermelho</span>
                    </div>
                    <div className={Style.selecionaCor}>
                        <span className={Style.verde}></span>
                        <span>Verde</span>
                    </div>
                </div>
            </section>
        </>
    );
}
