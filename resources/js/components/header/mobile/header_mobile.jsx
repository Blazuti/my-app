import React from 'react';
import Style from './header_mobile.module.css';
 

export default function Header() {
    return (
        <div className={Style.containerHeader}>
            <span className="material-symbols">arrow_back</span>

            <div className={Style.busca}>
                
                <input
                className={Style.mobile}
                    type="text"
                    placeholder="Buscar mais na Shopee"
                    name="procura-produto"
                />
            </div>

            <span className="material-symbols">share</span>
            <span className="material-symbols">shopping_cart</span>
            <span className="material-symbols">more_vert</span>
        </div>
    );
}
