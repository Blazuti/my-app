import React from "react";
import Style from "./rodape.module.css";
import imgRodape from "../../../../storage/app/public/image/rodape.png";

export default function Rodape() {

    return (
        <section className={Style.rodape}>
            <img src={imgRodape} alt="" />
        </section>
    );
}