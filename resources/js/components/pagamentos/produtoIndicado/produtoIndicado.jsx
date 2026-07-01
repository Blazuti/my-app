import React from 'react';
import Style from './produtoIndicado.module.css';
import { InfoProduto } from '@/infoProduto';
import img001 from '../../../../../storage/app/public/image/sugestaoProduto.png';
const shopee = 'https://shopee.com.br/buyer/login?next=https%3A%2F%2Fshopee.com.br%2F';

export default function ProdutoIndicado() {

    return (

        <>

            <a href={shopee} target="_blank" rel="noopener noreferrer" className={Style.containerProdutoIndicado}   >
                
                    <div className={Style.containerImgProduto}>
                        <img src={img001} alt="Imagem do Produto" />
                    </div>
                
               
            </a>
        </>
    );
}