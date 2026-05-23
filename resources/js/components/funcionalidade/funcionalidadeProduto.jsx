import React from 'react';
import Style from './funcionalidadeProduto.module.css';

export default function FuncionalidadeProduto() {
    return (
        <>
            <div className={Style.funcionalidadeProduto}>
                <h4>Descrição Do Produto</h4>
                <p>Sistema operacional Android 14, One UI 6.1</p>
                <p>Tamanho da memória RAM instalada 12 GB</p>
                <p>Modelo da CPU Snapdragon</p>
                <p>Velocidade da CPU 2,6 GHz</p>
                <p>Capacidade de armazenamento de memória 512 GB</p>
                <p>Tamanho da tela 7,3 polegadas</p>
                <p>Taxa de atualização 120 Hz</p>
                <p>Nome do modelo S24 Ultra</p>
                <p>Operadora sem fio desbloqueada para todas as operadoras</p>

                <details>
                    <summary>Ver mais</summary>
                    <p>SO: Android 14, One Ul 6.1</p>
                    <p>RAM: 12 GB</p>
                    <p>Tecnologias de comunicação sem fio: Celular</p>
                    <p>
                        Tecnologias de conectividade: 5G, Bluetooth, Wi-Fi, USB
                    </p>
                    <p>GPS: TRUE</p>
                    <p>
                        Recursos especiais: Suporte para carregamento rápido,
                        Aways On Display, carregamento sem fio, GPS integrado,
                        resistente à água
                    </p>
                    <p>Outros recursos de exibição: Sem fio</p>
                    <p>
                        Entrada de interface humana: Tela sensível ao toque,
                        microfone. Botões
                    </p>
                    <p>Outros recursos da câmera: Traseira Frontal</p>
                    <p>Conector de áudio: USB-C</p>
                    <p>Forma: Barra</p>
                    <p>Cor: Preto, prata, dourado</p>
                    <p>Classificação de energia da bateria: 8000</p>
                    <p>Tempo de conversação telefônica: 45 horas</p>
                    <p>
                        O que vem na caixa: S24 Ultra. Cabo USB-C. Ejetor
                        SlMTray, Guia de início rápido, Caneta
                    </p>
                    <p>Capacidade de armazenamento de memória: 512 GB</p>
                    <p>Tamanho da tela em pé: 7,3 polegadas</p>
                    <p>Tamanho da memória RAM instalada: 12 GB</p>
                    <p>Peso: 233 gramas</p>
                    <p>Tempo de carregamento: 59 minutos</p>
                </details>
            </div>
        </>
    );
}
