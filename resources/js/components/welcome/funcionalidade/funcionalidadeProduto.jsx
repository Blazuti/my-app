import React from 'react';
import Style from './funcionalidadeProduto.module.css';
import img001 from "../../../../../storage/app/public/image/detalhes-produto.png"

export default function FuncionalidadeProduto() {
    return (
        <section className={Style.funcionalidade}>
        <div className={Style.containerImg}>
            <img src={img001} alt="" />
        </div>
            <div className={Style.funcionalidadeProduto}>
                <h5>Descrição Do Produto</h5>
                <p>Garanta a segurança total do seu patrimônio com a Câmera de Segurança IP Lente Dupla Leboss LB-CA245. Projetada para oferecer monitoramento de alta precisão, esta câmera é a solução perfeita para proteger sua casa ou comércio, permitindo acesso remoto em tempo real diretamente da palma da sua mão através do aplicativo iCSee.

</p>
                <p>Principais Funções:</p>
                <p>Monitoramento Amplo: Graças ao controle PTZ, você pode movimentar a câmera horizontalmente e verticalmente, garantindo que nenhum ângulo passe despercebido.</p>
                <p>Detecção Inteligente: O sensor de movimento integrado identifica atividades suspeitas e ajuda a manter a segurança do ambiente.</p>
                <p>Segurança 24 horas: Equipada com visão noturna, garante imagens nítidas mesmo em ambientes com total ausência de luz.</p>
                <p>Uso Externo e Interno: Construção robusta para suportar as variações climáticas, ideal para instalação em fachadas, quintais ou áreas internas.</p>
                
                <details>
                    <summary>Ver Mais</summary>
                    <h6>Especificações Técnicas:</h6>
                    <p>Marca: Leboss</p>
                    <p>Modelo: LB-CA245</p>
                    <p>
                       Aplicativo de Gerenciamento: iCSee
                    </p>
                    <p>Resistência: Certificação IP66 (Resistente à água e poeira)</p>
                    <p>
                        Controle de Movimento: PTZ (Pan-Tilt-Zoom)
                    </p>
                    <p>Conectividade: Protocolo Wi-Fi IEE 802.1 b/g/n</p>
                    <p>
                        Visão Noturna: Sim
                    </p>
                    <p>Armazenamento: Suporte para Cartão MicroSD (Máximo de 128G)</p>
                    <p>Resolução de Vídeo: Suporta 1MP / 1.3MP / 2MP</p>
                    <p>Sensor: Sensor de movimento integrado</p>
                    <h6>Perguntas Frequentes (FAQ):</h6>
                    <p>P: A câmera precisa de internet para funcionar?

</p>
                    <p>R: Sim, para acessar as imagens em tempo real e receber notificações pelo aplicativo, é necessário conectá-la a uma rede Wi-Fi.</p>
                    <p>
                       P: O cartão de memória já vem com a câmera?
                    </p>
                    <p>R: Não, o cartão MicroSD (suporta até 128GB) deve ser adquirido separadamente.</p>
                    <p>P: Qual aplicativo devo baixar no celular?</p>
                    <p>R: A câmera utiliza o aplicativo "iCSee", que pode ser baixado gratuitamente nas lojas de aplicativos do seu smartphone.</p>
                    <p>P: Posso instalar a câmera em locais onde toma chuva?</p>
                    <p>R: Sim! A câmera possui proteção IP66, o que significa que é totalmente resistente à água e poeira.</p>
                </details>
            </div>
        </section>
    );
}
