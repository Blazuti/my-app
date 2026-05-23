import React from 'react';
import Style from './valorProduto.module.css';

export default function ValorProduto() {
    return (
        <>
            <div className={Style.timeOferta}>
                <span>OFERTAS RE</span>
                <span className="material-symbols">flash_on</span>
                <span>ÂMPAGO</span>
            </div>
            <div className={Style.containerValor}>
                <div className={Style.grupoValor}>
                    <span className={Style.moeda}>R$</span>
                    <span className={Style.valor}>750,00</span>
                    <span className={Style.valorAnterior}>675,00</span>
                    <span className={Style.desconto}>-10%</span>
                </div>
                <div className={Style.vendidos}>
                    <span>5mil+ Vendido(s)</span>

                    <span className="material-symbols">favorite</span>
                </div>
            </div>
        </>
    );
}
