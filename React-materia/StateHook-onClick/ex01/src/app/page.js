'use client';
import { useState } from "react";

export default function Home() {
  const [mensagem, setMensagem] = useState('O dia está lindo !! clique no botão abaixo para ver uma mensagem surpresa');
  
  function alterarMensagem(){
    setMensagem('Que você nunca deixe de acreditar em seus sonhos !!, sempre busque a felicidade !!');  
  }
  return (
    <div>
      <p>{mensagem}</p>
      <button onClick={ alterarMensagem }>Clique aqui !!</button>
    </div>
  );
}
