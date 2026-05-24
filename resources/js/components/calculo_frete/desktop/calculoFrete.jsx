import React from 'react';
import Style from './calculoFrete.module.css';

export default function CalculoFrete() {
    return (
        <>
            <div className={Style.containerFrete}>
                <div className={Style.frete}>Frete</div>
                <div>
                    <div className={Style.icon}>
                        <span class="material-symbols">
                            delivery_truck_speed
                        </span>
                        <span className={Style.frete}>Frete:</span>
                    </div>
                    <span className={Style.frte}>Frete</span>
                </div>
                <div className={Style.estado}>
                    <div className={Style.estadoSp}>
                        <div><span className={Style.nomeEstado}>São Paulo</span></div>
                    <span className={Style.valorAnterior}>R$18,98</span>
                    <span className={Style.valor}>R$0,00</span>
                    
                    </div>

                </div>
            </div>
        </>
    );
}
