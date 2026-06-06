import React from 'react';
import Style from './header_mobile.module.css';
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
    const { scrollYProgress } = useScroll();
    const bg = useTransform(
        scrollYProgress,
        [0, 0.05],
        ['rgba(255,255,255,0)', 'rgba(255,255,255,1)']
    );
    const shadow = useTransform(
        scrollYProgress,
        [0, 0.05],
        ['0px 0px 0px rgba(0,0,0,0)', '0px 8px 24px rgba(0,0,0,0.08)']
    );
    const iconColor = useTransform(
        scrollYProgress,
        [0, 0.05],
        ['#ffffff', 'var(--cor-laranja)']
    );

    const back = useTransform(
        scrollYProgress,
        [0, 0.05],
        ['rgba(0, 0, 0, 0.371)', 'transparent']
    );

    

    return (
        <motion.div
            className={Style.containerHeader}
            style={{ background: bg, boxShadow: shadow }}
        >
            <motion.span className="material-symbols" style={{ color: iconColor, background: back }}>arrow_back</motion.span>

            <div className={Style.busca}>
                <input
                    className={Style.mobile}
                    type="text"
                    placeholder="Buscar mais na Shopee"
                    name="procura-produto"
                />
            </div>

            <motion.span className="material-symbols" style={{ color: iconColor, background: back }}>share</motion.span>
            <motion.span className="material-symbols" style={{ color: iconColor, background: back }}>shopping_cart</motion.span>
            <motion.span className="material-symbols" style={{ color: iconColor, background: back }}>more_vert</motion.span>
        </motion.div>
    );
}
