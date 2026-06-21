import React from 'react';
import { useState } from 'react';
import Style from './header_desktop.module.css';
import Img01 from '../../../../../../storage/app/public/image/header-component.png';
import Logo from '../../../../../../storage/app/public/image/logo-shopee.png';
import Lupa from '../../../../../../storage/app/public/image/serch-component.png'
import SubNave from '../../../../../../storage/app/public/image/caminho_nav.png';
const Shopee = 'https://shopee.com.br/list/';

export default function Header_desktop() {
    const [valorBusca, setValorBusca] = useState('');

    const fazBusca = (e) => {
        e.preventDefault();
        const input = e.currentTarget.querySelector('input');
        const val = input ? input.value : '';
        setValorBusca(val);
        if (val) window.open(Shopee + val, '_blank');
    };
    return (
        <>
            <div className={Style.containerHeader}>
                <img src={Img01} alt="Header Image" />
                <div className={Style.buscaHeader}>
                    <img src={Logo} alt="" />
                    <div className={Style.containerInput}>
                        <form onSubmit={fazBusca} className={Style.busca}>
                            <input
                                className={`${Style.desktop} desktop`}
                                type="text"
                                placeholder="Buscar na Shopee"
                            />
                            <button type='submit'>
                                <img src={Lupa} alt="" />
                            </button>
                        </form>
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
