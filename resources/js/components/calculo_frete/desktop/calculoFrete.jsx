import React from 'react';
import Style from './calculoFrete.module.css';

export default function CalculoFrete() {
    return (
        <>
            <div className={Style.containerFrete}>
                <div className={Style.frete}>Frete</div>
                <div>
                    <div className={Style.icon}>
                        <span className="material-symbols">
                            delivery_truck_speed
                        </span>
                        <div className={Style.frete}>Frete:</div>
                    </div>
                    <div className={Style.frete}>Frete</div>
                </div>
                <div className={Style.estado}>
                    <div className={Style.estadoSp}>
                        <div className={Style.nomeEstado}><span>São Paulo</span></div>
                    <div className={Style.valores}>
                        <span className={Style.valor}>Grátis</span>
                    </div>
                    
                    </div>

                </div>
            </div>
        </>
    );
}
