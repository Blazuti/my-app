import React from 'react';
import Style from './valorProduto.module.css';
import { InfoProduto } from '@/infoProduto';

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
                    <span className={Style.moeda}>{InfoProduto.Moeda}</span>
                    <span className={Style.valor}>{InfoProduto.Valor}</span>
                    <span className={Style.valorAnterior}>{InfoProduto.ValorAnterior}</span>
                    <span className={Style.desconto}>{InfoProduto.Desconto}</span>
                </div>
                <div className={Style.vendidos}>
                    <span>5mil+ Vendido(s)</span>

                    <span className="material-symbols">favorite</span>
                </div>
            </div>
        </>
    );
}
