import React from 'react';
import Style from './header_desktop.module.css';
import Img01 from '../../../../../storage/app/public/image/header-component.png';
import Logo from '../../../../../storage/app/public/image/logo-shopee.png';
import SubNave from '../../../../../storage/app/public/image/caminho_nav.png';

export default function Header_desktop() {
    return (
        <>
            <div className={Style.containerHeader}>
                <img src={Img01} alt="Header Image" />
                <div className={Style.buscaHeader}>
                    <img src={Logo} alt="" />
                    <div className={Style.containerInput}>
                        <input
                            className={Style.desktop}
                            type="text"
                            placeholder="Buscar na Shopee"
                        />
                        <div className={Style.subitens}>
                            <span>
                                Short Para Academia
                            </span>
                            <span>
                                Garrafa Térmica de Água
                            </span>
                            <span>
                                Fone Sem Fio Bluetooth
                            </span>
                        </div>
                    </div>
                    <span className="material-symbols">shopping_cart</span>
                </div>
            </div>
            <div className={Style.subNave}>
                <img src={SubNave} alt="Subnav" />
            </div>
        </>
    );
}
