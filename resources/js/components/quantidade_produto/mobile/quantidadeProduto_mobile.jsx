import React from "react";
import Style from "./quantidadeProduto.module.css"
import CorProduto from "../../cor_produto/desktop/cor_produto_desktop"
import Quantidade from "../../quantidade_produto/desktop/quantidade_produto_desktop"
import { InfoProduto } from "@/infoProduto";
import useComprarMobile from '../../../togle';

export default function quantidadeProduto_mobile() {
const { isOpen, toggleOpen } = useComprarMobile();

    return (

        <section className={Style.containerQuantidade}>
            <div className={Style.info}>
                <div className={Style.imgProduto}>
                    <img src={InfoProduto.img01} alt="" />
                </div>
                <div className={Style.valor}>
                    <div className={Style.close} onClick={toggleOpen}>
                        <span class="material-symbols">
                        close
                        </span>
                    </div>
                    <span className={Style.valorAtual}>
                        {InfoProduto.Moeda}
                        {InfoProduto.Valor}
                    </span>
                        <span className={Style.valorAnterior}>{InfoProduto.ValorAnterior}</span>
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