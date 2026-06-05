import React from 'react';
import Style from './vendedor.module.css';
import imgInfoVendedor from '../../../../../storage/app/public/image/infoVendedor.png';

const imgVendedor = "https://down-br.img.susercontent.com/file/br-11134216-81z1k-mfc70qq45xc61c@resize_w160_nl.webp"
export default function Vendedor() {
    return (
        <>
            <div className={Style.vendedor}>
                <div className={Style.descVendedor}>
                    <div className={Style.imgVendedor}>
                        <img src={imgVendedor} alt="Vendedor" />
                    </div>
                    <div className={Style.nomeVendedor}>
                        <h4>Vendedor</h4>
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
                                <span>Visitar Loja</span>
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
