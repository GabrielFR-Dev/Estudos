'use client';
import { useState } from 'react';
import estilos from "./page.module.css";


export default function Home() {
  const [corAlterada, setCorAlterada] = useState(false);
  const [elemento, setElemento] = useState(estilos.fdVermelho);

  function Alterar() {
    if (corAlterada === true) {
      setCorAlterada(false)
      setElemento(estilos.fdVermelho)
    } else {
      setCorAlterada(true)
      setElemento(estilos.fdAzul)
    }
  }

  return (

    <main className={estilos.container}>
      <div className={estilos.container_textual}>
        <h1>Alterando estilos dos elementos</h1>

        <div className={elemento}></div>

        <p>Clique no botão para alterar o estilo do elemento acima</p>
        <div className={estilos.container_botao}>
          <button onClick={Alterar}>Alterar</button>
        </div>

      </div>


    </main>
  );
}
