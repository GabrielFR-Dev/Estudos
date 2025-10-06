'use client';
import Menu from "@/componentes/menu";
import { useState } from "react";
import estilos from "./page.module.css";

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);

  function atualizarMenu() {
    setMenuAberto(!menuAberto);
  };

  return (
    <main>
      <header className={estilos.container}>
        <button className={estilos.botao} onClick={atualizarMenu}>
          {menuAberto ? 'Fechar Menu' : 'Abrir Menu'}
        </button>
      </header>
      {menuAberto && (
        <Menu />
      )}

    </main>

  );
}
