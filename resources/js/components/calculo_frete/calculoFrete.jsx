import React from 'react';
import Style from './calculoFrete.module.css';

export default function CalculoFrete() {
    return (
        <>
            <div className={Style.calculoFrete}>
                <span className="material-symbols">delivery_truck_speed</span>
                <p>Frete grátis</p>
            </div>
        </>
    );
}
