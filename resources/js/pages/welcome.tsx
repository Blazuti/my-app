import React from 'react';
import DescricaoProduto from '../components/descricao/descricao';
import AvaliacaoProduto from '../components/avaliacao_produto/avaliacao_produto';
import FuncionalidadeProduto from '../components/funcionalidade/funcionalidadeProduto';
import CalculoFrete_mobile from '../components/calculo_frete/mobile/calculoFrete';
import CalculoFrete_desktop from '../components/calculo_frete/desktop/calculoFrete';
import Vendedor from '../components/vendedor/vendedor';
import ImagemProduto_mobile from '../components/image_produto/mobile/imagem_produto_mobile';
import ImagemProduto_desktop from '../components/image_produto/desktop/imagemProduto_desktop';
import Header_mobile from '../components/header/mobile/header_mobile';
import Header_desktop from '../components/header/desktop/header_desktop';
import useAlternaDevice from '@/hooks/alterna_device';
import Footer_mobile from '../components/footer/mobile/footer_mobile';
import Footer_desktop from '../components/footer/desktop/footer_desktop';

export default function Welcome() {
    const device = useAlternaDevice();
    return (
        <section className="welcome">
            <>{device === 'mobile' ? <Header_mobile /> : <Header_desktop />}</>
            <section className="main-section">
                <>
                    {device === 'mobile' ? (
                        <ImagemProduto_mobile />
                    ) : (
                        <ImagemProduto_desktop />
                    )}
                </>

                <>{device === 'mobile' ? <DescricaoProduto /> : ''}</>

                <>
                    {device === 'mobile' ? (
                        <CalculoFrete_mobile />
                    ) : (
                        ""
                    )}
                </>

                <>{device === 'mobile' ? <AvaliacaoProduto /> : ''}</>

                <Vendedor />

                <FuncionalidadeProduto />

                <>
                    {device === 'mobile' ? (
                        <Footer_mobile />
                    ) : (
                        <Footer_desktop />
                    )}
                </>
            </section>
        </section>
    );
}
