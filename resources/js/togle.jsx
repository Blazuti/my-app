import react from 'react';
import { useState } from 'react';
import QuantidadeProduto from "./components/welcome/quantidade_produto/mobile/quantidadeProduto_mobile"

export default function useComprarMobile() {

    const [isOpen, setIsOpen] = useState(false);
 
    // Função simples para alternar entre true e false
  const toggleOpen = () => setIsOpen(!isOpen);
  console.log(isOpen)
  // Retornamos o estado atual e a função de alternar
  return { isOpen, toggleOpen, setIsOpen };
}
