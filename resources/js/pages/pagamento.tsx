import React, { useState } from "react";
import HeaderDesk from "../components/pagamentos/header/desktop/header_desktop";
import Rodape from "@/components/welcome/rodape/rodape";
import HeaderMobile from "../components/pagamentos/header/mobile/header_mobile";
import DadosEnvioMobile from "../components/pagamentos/dadosEnvio/dadosEnvio";
import FinalizaPagamentoDesk from "../components/pagamentos/finalizaPagamento/desk/finalizaPagamento_desk";

import useAlternaDevice from '@/hooks/alterna_device';

export default function Pagamento() {
    const device = useAlternaDevice();
    const [mostrarResumo, setMostrarResumo] = useState(false);

    return (
        <>
            {device === 'mobile' ? <HeaderMobile /> : <HeaderDesk />}
            {!mostrarResumo ? (
                <DadosEnvioMobile onSuccess={() => setMostrarResumo(true)} />
            ) : (
                <FinalizaPagamentoDesk onEditar={() => setMostrarResumo(false)} />
            )}

            
        </>
    );
}