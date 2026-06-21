import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './imagemProduto_mobile.module.css';
import {InfoProduto} from '@/infoProduto';


export default function AvaliacaoProduto() {
    return (
        <>
        <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={InfoProduto.img01} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                            <div className="ratio ratio-1x1">
                               
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
                
                <div className="carousel-item">
                    <img src={InfoProduto.img02} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={InfoProduto.img03} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={InfoProduto.img04} className="d-block w-100" alt="..." />
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
                    </>
    );
}
