'use client';
import { useState } from "react";
import estilos from "./page.module.css";

export default function Home() {
  const [mensagem, setMensagem]= useState('') ;

  function clicar() {
    setMensagem("Sejá bem vindo");
  }

  return (
    <main className={estilos.container}>
      <div className={estilos.elementos} >
        <h1>{mensagem}</h1>
        <p>Click no botão abaixo para aparecer um texto:</p>
        <div>
          <button onClick={clicar}>Gerar</button>
        </div>
      </div>
    </main>
  );
}
