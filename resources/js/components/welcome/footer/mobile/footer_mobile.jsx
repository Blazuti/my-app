import React from 'react';
import Style from './footer.module.css';
import useComprarMobile from '../../../../togle';
import QuantidadeProduto from "../../quantidade_produto/mobile/quantidadeProduto_mobile"
import { AnimatePresence } from 'framer-motion';

export default function Footer() {
 const { isOpen, setIsOpen, toggleOpen } = useComprarMobile();


    return (
        <>
            <div className={Style.containerFooter}>
           <AnimatePresence>{isOpen && <QuantidadeProduto fechar={() => setIsOpen(false)} />}</AnimatePresence>
                <div className={Style.buttonLeft}>
                    <div className={Style.mensage}>
                        <div className="material-symbols">message</div>
                    </div>
                    <div className={Style.shoppingCart}>
                        <div className="material-symbols">shopping_cart</div>
                    </div>
                </div>
                <div className={Style.buttonRight}>
                    <div className={Style.buy} onClick={toggleOpen} >
                        <p>Compre agora</p>
                    </div>
                </div>
            </div>
        </>
    );
}
