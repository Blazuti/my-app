import React from "react";
import Style from "./quantidadeProduto.module.css"
import CorProduto from "../../cor_produto/desktop/cor_produto_desktop"
import Quantidade from "../../quantidade_produto/desktop/quantidade_produto_desktop"
import { InfoProduto } from "@/infoProduto";
import { Link } from '@inertiajs/react';
import useComprarMobile from '../../../../togle';
import { motion } from 'framer-motion';

export default function quantidadeProduto_mobile({fechar}) {


    return (
         <motion.div 
      className="painel-quantidade"
        initial={{ y: '100%' }} // Começa totalmente abaixo da tela
        animate={{ y: 0 }}       // Sobe para a posição correta
        exit={{ y: '100%' }}    // Desce totalmente ao fechar
        transition={{ 
          type: 'tween',        // Muda para animação linear/baseada em tempo
          ease: 'easeOut',      // Começa rápido e desacelera suavemente no final
          duration: 0.3   
               // Tempo total de subida (0.3 segundos)
        }} 
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          backgroundColor: '#fff',
          zIndex: 999,
         
        }}
        
      >
    

        <section className={Style.containerQuantidade}>
            <div className={Style.info}>
                <div className={Style.imgProduto}>
                    <img src={InfoProduto.img01} alt="" />
                </div>
                <div className={Style.valor}>
                    <div className={Style.close} onClick={fechar}>
                        <span className="material-symbols">
                        close
                        </span>
                    </div>
                    <span className={Style.valorAtual}>
                        {InfoProduto.Moeda}
                        {InfoProduto.Valor}
                    </span>
                        <span className={Style.valorAnterior}>{InfoProduto.ValorAnterior}</span>
                </div>
            </div>
            <div className={Style.ajuste}>
                <CorProduto/>
                <Quantidade/>
            </div>
            <Link href="/pagamento" style={{ textDecoration: 'none' }}>
                <div className={Style.comprar}>Compre agora</div>
            </Link>
        </section>
        </motion.div>
    );
}