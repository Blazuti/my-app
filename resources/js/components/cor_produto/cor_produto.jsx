import React from "react";
import CorProduto_desktop from "./desktop/cor_produto_desktop";
import useAlternaDevice from "../../hooks/alterna_device";

export default function CorProduto() {
    const device = useAlternaDevice();
    return (
        <>
        {device === "desktop" ? <CorProduto_desktop /> : null}
        </>
    );
}