import React from 'react';
import Style from './vendedor.module.css';
import {InfoProduto} from '@/infoProduto'

export default function Vendedor() {
    return (
        <>
            <div className={Style.vendedor}>
                <div className={Style.containerImg}>
                    <div className={Style.imgVendedor}>
                        <div className={Style.foto}>
                            <img src={InfoProduto.ImgVendedor} alt="Vendedor" />
                        </div>
                        <span>
                            <h6>W.A_VARIEDADES</h6>
                            <p>Ativo há 15 minutos</p>
                        </span>
                    </div>
                    <div className={Style.verLoja}>
                        <p>Ver loja</p>
                    </div>
                </div>
                <div className={Style.infoVendedor}>
                    <div className={Style.containerVendedor}>
                        <h5>4,8</h5>
                        <p>avaliações</p>
                    </div>
                    <div className={Style.containerVendedor}>
                        <h5>13</h5>
                        <p>produtos</p>
                    </div>
                    <div className={Style.containerVendedor}>
                        <h5>-</h5>
                        <p>Tempo de resposta</p>
                    </div>
                </div>
            </div>
        </>
    );
}
