import React from "react";
import useAlternaDevice from "../../hooks/alterna_device";
import ImagemProduto_mobile from "./mobile/imagem_produto_mobile";
import ImagemProduto_desktop from "./desktop/imagemProduto_desktop";

export default function ImagemProduto() {
    const device = useAlternaDevice(); //retorna o tipo de dispositivo ("mobile" ou "desktop")
    
    return (

        <>
            {device === "mobile" ? <ImagemProduto_mobile /> : <ImagemProduto_desktop />}
        </>
    );
}