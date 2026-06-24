import React from "react";
import Style from "./avaliacao.module.css";

import img001 from "../../../../../../storage/app/public/image/image-avaliacao-desk/img001.png";
import img002 from "../../../../../../storage/app/public/image/image-avaliacao-desk/img002.png";
import img003 from "../../../../../../storage/app/public/image/image-avaliacao-desk/img003.png";
import img005 from "../../../../../../storage/app/public/image/image-avaliacao-desk/paginacao.png";

export default function AvaliacaoDesktop() {
    
    return (
        <>  
        <div className={Style.avaliacao}>
        <img src={img001} alt=" " />
        <img src={img002} alt="" />
        <img src={img003} alt="" />
        <img src={img005} alt="" />
        </div>
        </>
    );
}