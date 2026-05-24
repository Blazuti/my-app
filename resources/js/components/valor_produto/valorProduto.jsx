import React from "react";
import ValorProduto_mobile from "./mobile/valorProduto_mobile";
import useAlternaDevice from "../../hooks/alterna_device";

export default function ValorProduto() {
const device = useAlternaDevice(); //retorna o tipo de dispositivo ("mobile" ou "desktop")
    
    return (

        <>
            {device === "mobile" ? <ValorProduto_mobile /> : ""}
        </>
    );
}