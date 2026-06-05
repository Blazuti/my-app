import React from 'react';
import DescricaoProduto from '../components/descricao/descricao';
import AvaliacaoProduto from '../components/avaliacao_produto/mobile/avaliacao_mobile';
import AvaliacaoProduto_desktop from '../components/avaliacao_produto/desktop/avaliacao_desktop';
import FuncionalidadeProduto from '../components/funcionalidade/funcionalidadeProduto';
import CalculoFrete_mobile from '../components/calculo_frete/mobile/calculoFrete';
import Vendedor_desktop from '../components/vendedor/desktop/vendedor_desktop';
import Vendedor_mobile from '../components/vendedor/mobile/vendedor_mobile';
import ImagemProduto_mobile from '../components/image_produto/mobile/imagem_produto_mobile';
import ImagemProduto_desktop from '../components/image_produto/desktop/imagemProduto_desktop';
import Header_mobile from '../components/header/mobile/header_mobile';
import Header_desktop from '../components/header/desktop/header_desktop';
import useAlternaDevice from '@/hooks/alterna_device';
import Footer from '../components/footer/footer';
import Rodape from '../components/rodape/rodape';

export default function Welcome() {
    const device = useAlternaDevice();
    return (
        <>
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
                        null
                    )}
                </>

                <>{device === 'mobile' ? <AvaliacaoProduto /> : null}</>
            </section>
            <section className="main-section">
                <>{device === 'mobile' ? <Vendedor_mobile /> : <Vendedor_desktop />}</>
            </section>
            <section className="main-section">
                <FuncionalidadeProduto />

                <>
                    {device === 'mobile' ? (
                        <Footer />
                    ) : (
                        null
                    )}
                </>
            </section>
            <section className="main-section">
                <>{device === 'mobile' ? null : <AvaliacaoProduto_desktop />}</>
            </section>
        <section className='rodape'>
            {device === 'mobile' ? null : <Rodape />}
        </section>
        </section>
        </>
    );
}
