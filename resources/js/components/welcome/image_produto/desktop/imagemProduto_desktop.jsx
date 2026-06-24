import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './imagem_produto_desktop.module.css';
import DescricaoProduto from '../../descricao/descricao';
import ValorProduto from '../../valor_produto/mobile/valorProduto_mobile';
import ValorFrete from '../../calculo_frete/desktop/calculoFrete';
import CorProduto from '../../cor_produto/cor_produto';
import QuantidadeProduto from '../../quantidade_produto/desktop/quantidade_produto_desktop'
import Footer from '../../footer/footer';
import {InfoProduto} from '../../../../infoProduto'

export default function ImagemProduto_desktop() {
    return (
        <div className={Style.containerDescricao}>
            <div className={Style.containerCarousel}>
                <div
                    id="carouselExampleAutoplaying"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="ratio ratio-1x1">
                                <div className={Style.video}>
                                    <video
                                        src={InfoProduto.video}
                                        className="d-block w-100"
                                        alt="..."
                                        autoPlay
                                        muted
                                        loop
                                                               />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src={InfoProduto.img01}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={InfoProduto.img02}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={InfoProduto.img03}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={InfoProduto.img04}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={InfoProduto.img05}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={InfoProduto.img06}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={InfoProduto.img07}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                      
                       
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                    <section className={Style.containerImg}>
                        <div className={Style.localImg}>
                            <img src={InfoProduto.img01} alt="" />
                        </div>
                        <div className={Style.localImg}>
                            <img src={InfoProduto.img02} alt="" />
                        </div>
                        <div className={Style.localImg}>
                            <img src={InfoProduto.img03} alt="" />
                        </div>
                        <div className={Style.localImg}>
                            <img src={InfoProduto.img04} alt="" />
                        </div>
                        <div className={Style.localImg}>
                            <img src={InfoProduto.img05} alt="" />
                        </div>
                    </section>
            </div>
            <div className={Style.containerDescricaoProduto}>
                <DescricaoProduto />
                <div className={Style.avaliacaoProduto}>
                    <div className={Style.avaliacaoProdutoContainer}>
                        <span className={Style.title}>5</span>
                        <span className="material-symbols-outlined">star</span>
                        <span className="material-symbols-outlined">star</span>
                        <span className="material-symbols-outlined">star</span>
                        <span className="material-symbols-outlined">star</span>
                        <span className="material-symbols-outlined">star</span>
                    </div>
                    <div className={Style.avaliacaoProdutoContainer}>
                        <span className={Style.title}>908</span>
                        <span className={Style.avaliacao}>Avaliações</span>
                    </div>
                </div>
                <ValorProduto />
                <ValorFrete />
                <CorProduto />
                <QuantidadeProduto />
                <Footer />
            </div>
        </div>
    );
}
