import React from "react";
import useAlternaDevice from "../../hooks/alterna_device";
import Header_mobile from "./mobile/header_mobile";
import Header_desktop from "./desktop/header_desktop";

export default function Header() {
    const device = useAlternaDevice(); //retorna o tipo de dispositivo ("mobile" ou "desktop")
    
    return (

        <>
            {device === "mobile" ? <Header_mobile /> : <Header_desktop />}
        </>
    );
}