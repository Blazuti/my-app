import React from 'react';
import Style from './descricao.module.css';
const imgIndicado = 'https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/6e3235645d9bb5f56939.png';


export default function Descricao() {

    return (
        <>
            <div className={Style.descricaoProduto}>
                
                <span className={Style.Descricao}>
                    <span className={Style.indicado}>
                        <img src={imgIndicado} alt="Indicado" />
                    </span>
                    BML S26 Ultra Smartphone 512 GB+12GB De Ram (8 Dinâmica) 5G
                    LTE Wi-fi, Câmera 108MP
                </span>
            </div>
        </>
    );
}
