import React from "react";
import { useState, useEffect } from "react";


export default function useAlternaDevice() {
    // Define o layout do header com base na largura da janela
    const [device, setDevice] = useState(window.innerWidth < 768 ? "mobile" : "desktop");

    useEffect(() => {
        const handleResize = () => {
            const newDevice = window.innerWidth < 768 ? "mobile" : "desktop";
            setDevice(newDevice);
            
        };

        handleResize(); // Executa na montagem
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return device;
}