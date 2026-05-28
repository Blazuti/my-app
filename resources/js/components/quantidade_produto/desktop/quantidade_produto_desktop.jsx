import React from "react";
import Style from "./quantidadeProduto.module.css"

export default function QuantidadeProduto() {

    return (
        <section className={Style.containerQtdProduto}>
            <div className={Style.textQtd}>
                Quantidade
            </div>
            <div className={Style.selectQtd}>
                <div className={Style.menosProduto}>-</div>
                <div className={Style.visorQtd}>2</div>
                <div className={Style.maisProduto}>+</div>
            </div>
            <div className={Style.estoque}>
                Estoque Disponivel
            </div>
        </section>
    );
}