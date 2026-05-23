import React from 'react';
import DescricaoProduto from '../components/descricao/descricao';
import AvaliacaoProduto from '../components/avaliacao_produto/avaliacao_produto';
import FuncionalidadeProduto from '../components/funcionalidade/funcionalidadeProduto';
import CalculoFrete from '../components/calculo_frete/calculoFrete';
import Footer from '../components/footer/footer';
import ValorProduto from '../components/valor_produto/valorProduto';
import Vendedor from '../components/vendedor/vendedor';
import ImagemProduto from '../components/image_produto/imagemProduto';
import Header from '../components/header/header';

export default function Welcome() {
    return (
        <section className="welcome">
            <Header /> 
            <section className="main-section">
                <ImagemProduto />
                <ValorProduto />
                <DescricaoProduto />
                <CalculoFrete />
                <AvaliacaoProduto />
                <Vendedor />
                <FuncionalidadeProduto />
                <Footer />
            </section>
        </section>
    );
}
