import React from 'react';
import Style from './descricao.module.css';
import {InfoProduto} from '../../infoProduto'
const imgIndicado = 'https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/6e3235645d9bb5f56939.png';


export default function Descricao() {

    return (
        <>
            <div className={Style.descricaoProduto}>
                
                <span className={Style.Descricao}>
                    <span className={Style.indicado}>
                        <img src={imgIndicado} alt="Indicado" />
                    </span>
                    {InfoProduto.DescricaoProduto}
                </span>
            </div>
        </>
    );
}
