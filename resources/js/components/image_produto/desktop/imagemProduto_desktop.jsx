import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './imagem_produto_desktop.module.css';
import DescricaoProduto from '../../descricao/descricao';
import ValorProduto from '../../valor_produto/mobile/valorProduto_mobile';
import ValorFrete from '../../calculo_frete/desktop/calculoFrete';
import CorProduto from '../../cor_produto/cor_produto';
import QuantidadeProduto from '../../quantidade_produto/desktop/quantidade_produto_desktop'
import Footer from '../../footer/footer';

const img01 = 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lomqjeb9ouk2cc@resize_w900_nl.webp'; 
const img02 =
    'https://down-br.img.susercontent.com/file/sg-11134201-825a0-mev9mf7ucxs258@resize_w900_nl.webp';
const img03 =
    'https://down-br.img.susercontent.com/file/sg-11134201-825b0-mev9mac2445c79@resize_w900_nl.webp';
const img04 =
    'https://down-br.img.susercontent.com/file/sg-11134201-82588-mev9mbhi53pg18@resize_w900_nl.webp';
const img05 =
    'https://down-br.img.susercontent.com/file/sg-11134201-825a6-mev9mchqu7lze2@resize_w900_nl.webp';
const img06 =
    'https://down-br.img.susercontent.com/file/sg-11134201-8259v-mev9me5zwxdv64@resize_w900_nl.webp';
const img07 = 'https://down-br.img.susercontent.com/file/sg-11134201-825at-mev9m8v51fyc93@resize_w900_nl.webp';
const video = 'https://down-bs-br.vod.susercontent.com/api/v4/11110106/mms/sg-11110106-6va2n-mlxuaxlf26fjae.16000081773770923.mp4';

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
                                        src={video}
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
                                src={img01}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={img02}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={img03}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={img04}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={img05}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={img06}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={img07}
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
                            <img src={img01} alt="" />
                        </div>
                        <div className={Style.localImg}>
                            <img src={img02} alt="" />
                        </div>
                        <div className={Style.localImg}>
                            <img src={img03} alt="" />
                        </div>
                        <div className={Style.localImg}>
                            <img src={img04} alt="" />
                        </div>
                        <div className={Style.localImg}>
                            <img src={img05} alt="" />
                        </div>
                    </section>
            </div>
            <div className={Style.containerDescricaoProduto}>
                <DescricaoProduto />
                <div className={Style.avaliacaoProduto}>
                    <div className={Style.avaliacaoProdutoContainer}>
                        <span className={Style.title}>4</span>
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
