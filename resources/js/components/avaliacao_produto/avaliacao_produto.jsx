import React from 'react';
import Style from './avaliacaoProduto.module.css';


export default function AvaliacaoProduto() {
    return (
        <>
            <div className={Style.avaliacaoProduto}>
                <div className={Style.avaliacao}>
                    <h2>5</h2>
                    <span className="material-symbols-outlined">star</span>
                    <p>Avaliação do produto (2)</p>
                </div>

                <div className={Style.vermais}>
                    <p>Ver mais &gt;</p>
                </div>
            </div>
            <div className={Style.fotoAvaliacao}>
                
            </div>
            <div className={Style.verTudo}>
                <span>Ver tudo</span>
                <i className="material-symbols">chevron_right</i>
            </div>
        </>
    );
}
