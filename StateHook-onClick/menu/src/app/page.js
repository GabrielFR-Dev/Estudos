'use client';
import Menu from "@/componentes/menu";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import estilos from "./page.module.css";

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);

  function atualizarMenu() {
    setMenuAberto(!menuAberto);
  };

  return (
    <main className={estilos.main}>
      <header className={estilos.container}>
        <button className={estilos.botao} onClick={atualizarMenu}>
          {menuAberto ? <MdClose /> : <CiMenuBurger />}
        </button>
      </header>
      {menuAberto && (
        <Menu />
      )}

    </main>

  );
}
