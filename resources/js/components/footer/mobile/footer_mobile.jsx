import React from 'react';
import Style from './footer.module.css';
export default function Footer() {
    return (
        <>
            <div className={Style.containerFooter}>
                <div className={Style.buttonLeft}>
                    <div className={Style.mensage}>
                        <div className="material-symbols">message</div>
                    </div>
                    <div className={Style.shoppingCart}>
                        <div className="material-symbols">shopping_cart</div>
                    </div>
                </div>
                <div className={Style.buttonRight}>
                    <div className={Style.buy}>
                        <p>Compre agora</p>
                    </div>
                </div>
            </div>
        </>
    );
}
