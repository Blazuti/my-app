import React from "react";  
import HeaderDesk from "../components/pagamentos/header/desktop/header_desktop";
import HeaderMobile from "../components/pagamentos/header/mobile/header_mobile";
import DadosEnvioMobile from "../components/pagamentos/dadosEnvio/dadosEnvio";
import useAlternaDevice from '@/hooks/alterna_device';

export default function Pagamento() {
     const device = useAlternaDevice();
    return (
        <>
        {device ==='mobile' ? <HeaderMobile /> : <HeaderDesk />};
        <DadosEnvioMobile />;
        
        </>
    );
}