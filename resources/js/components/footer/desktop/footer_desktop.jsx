import React from 'react';
import Style from './footer.module.css';
export default function Footer() {
    return (
        <section className={Style.footer}>
            <div className={Style.addCart}>
                <span class="material-symbols">add_shopping_cart</span>
                Adicionar Ao Carrinho
            </div>
            <div className={Style.comprarAgora}>Comprar Agora</div>
        </section>
    );
}
