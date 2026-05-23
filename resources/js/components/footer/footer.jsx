import React from "react";
import Footer_mobile from "./mobile/footer_mobile";
import useAlternaDevice from "../../hooks/alterna_device";

export default function Footer() {
    const device = useAlternaDevice(); //retorna o tipo de dispositivo ("mobile" ou "desktop")


    return (
        <>
            {device === "mobile" ? <Footer_mobile /> : null}
        </>
    );
}