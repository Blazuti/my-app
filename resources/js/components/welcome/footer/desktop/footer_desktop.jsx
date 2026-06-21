import React from 'react';
import { Link } from '@inertiajs/react';
import Style from './footer.module.css';

const login = 'https://shopee.com.br/buyer/login?extraParams=%7B%22display_model_id%22%3A238804871065%2C%22model_selection_logic%22%3A3%7D&from=https%3A%2F%2Fshopee.com.br%2FFone-de-Ouvido-Bluetooth-5.0-Sem-Fio-Headset-Bateria-de-Longa-Dura%25C3%25A7%25C3%25A3o-Fone-Corrida-Academia-i.1541280136.58208889792%3FextraParams%3D%257B%2522display_model_id%2522%253A238804871065%252C%2522model_selection_logic%2522%253A3%257D&from_source=pdp_add_to_cart_btn&next=https%3A%2F%2Fshopee.com.br%2FFone-de-Ouvido-Bluetooth-5.0-Sem-Fio-Headset-Bateria-de-Longa-Dura%25C3%25A7%25C3%25A3o-Fone-Corrida-Academia-i.1541280136.58208889792%3FextraParams%3D%257B%2522display_model_id%2522%253A238804871065%252C%2522model_selection_logic%2522%253A3%257D'

export default function Footer() {
    return (
        <section className={Style.footer}>
            <a href={login} style={{ textDecoration: 'none' }}>
                <div className={Style.addCart} action={login}>
                    <span className="material-symbols">add_shopping_cart</span>
                    Adicionar Ao Carrinho
                </div>
            </a>

            <Link href="/pagamento" style={{ textDecoration: 'none' }}
            className={Style.comprarAgora}>
                Comprar Agora
            </Link>
        </section>
    );
}
