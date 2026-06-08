import Style from "./quantidadeProduto.module.css"
import { useAdicionaProduto } from '@/hooks/adicionaProduto'
export default function QuantidadeProduto() {
    const { quantidade, incrementar, decrementar } = useAdicionaProduto();

    return (
        <section className={Style.containerQtdProduto}>
            <div className={Style.textQtd}>
                Quantidade
            </div>
            <div className={Style.selectQtd}>
                <div className={Style.menosProduto} onClick={decrementar}>-</div>
                <div className={Style.visorQtd}>{quantidade}</div>
                <div className={Style.maisProduto} onClick={incrementar}>+</div>
            </div>
            <div className={Style.estoque}>
                Estoque Disponivel
            </div>
        </section>
    );
}