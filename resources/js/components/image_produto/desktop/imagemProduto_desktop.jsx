import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './imagem_produto_desktop.module.css';
const img01 =
    'https://down-br.img.susercontent.com/file/br-11134207-81zu6-ml2wpzd74001e8@resize_w900_nl.webp';
const img02 =
    'https://down-br.img.susercontent.com/file/br-11134207-81zun-ml2wpzd79m9te2@resize_w900_nl.webp';
const img03 =
    'https://down-br.img.susercontent.com/file/br-11134207-81zun-ml2wpzd79m9te2@resize_w900_nl.webp';

export default function ImagemProduto_desktop() {
    return (
        <div className={Style.containerCarousel}>
            <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img01} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img02} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img03} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img03} className="d-block w-100" alt="..." />
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
        </div>
    );
}
