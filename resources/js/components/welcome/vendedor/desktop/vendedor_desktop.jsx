import React from 'react';
import Style from './vendedor.module.css';
import imgInfoVendedor from '../../../../../../storage/app/public/image/info-vendedor.png';
import {InfoProduto} from '@/infoProduto'
const pagVendedor = `${InfoProduto.PagVendedor}`
export default function Vendedor() {
    return (
        <>
            <div className={Style.vendedor}>
                <div className={Style.descVendedor}>
                    <div className={Style.imgVendedor}>
                        <img src={InfoProduto.ImgVendedor} alt="Vendedor" />
                    </div>
                    <div className={Style.nomeVendedor}>
                        <h6>{InfoProduto.NomeVendedor}</h6>
                        <div className={Style.status}>
                            <div className={Style.online}></div>
                            <span>Online</span>
                        </div>
                        <div className={Style.opcoesVendedor}>
                            <div className={Style.conversa}>
                                <span className="material-symbols">chat</span>
                                <span>Conversar Agora</span>
                            </div>
                            <div className={Style.visitarLoja}>
                                <span className="material-symbols">store</span>
                                <a href={pagVendedor} target='_blank'><span>Visitar Loja</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Style.infoVendedor}>
                    <img src={imgInfoVendedor} alt="Informações do Vendedor" />
                </div>
            </div>
        </>
    );
}
