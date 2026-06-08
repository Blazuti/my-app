import React from "react";
import Style from "./quantidadeProduto.module.css"
import CorProduto from "../../cor_produto/desktop/cor_produto_desktop"
import Quantidade from "../../quantidade_produto/desktop/quantidade_produto_desktop"
import { InfoProduto } from "@/infoProduto";
import ValorProduto from "@/components/valor_produto/mobile/valorProduto_mobile";

export default function quantidadeProduto_mobile() {

    return (

        <section className={Style.containerQuantidade}>
            <div className={Style.info}>
                <div className={Style.imgProduto}>
                    <img src={InfoProduto.img01} alt="" />
                </div>
                <div className={Style.valor}>
                    <ValorProduto/>
                </div>
            </div>
            <div className={Style.ajuste}>
                <CorProduto/>
                <Quantidade/>
            </div>
            <div className={Style.comprar}>Compre agora</div>
        </section>
    );
}