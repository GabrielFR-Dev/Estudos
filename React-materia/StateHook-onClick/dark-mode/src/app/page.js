'use client';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import estilos from "./page.module.css";
import { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export default function Home() {
  const [alterarTema, setAlterarTema] = useState(false);

  function trocarTemaPagina() {
    setAlterarTema(!alterarTema);
  }

  return (
    <div className={alterarTema ? estilos.dark_mode : estilos.light_mode}>
      <header className={estilos.header_container}>
        <h1>Coffe Shop</h1>
        <button onClick={trocarTemaPagina}>{alterarTema ? <BsSun /> : <BsMoon />}</button>
      </header>
      <main className={estilos.main_container}>
        <div>
          <h2>A melhor cafeteria do Brasil</h2>
          <p>
            Venha conhecer a melhor cafeteria do Brasil! Localizada no coração de São paulo, oferemos cafés artesanais de alta qualidade e um ambiente acolhedor.
            Desfute de nossas bebidas exclusivas e deliciosos acompanhamento enquanto relaxa em um espaço único. Esperamos por você para uma experiência inesquecível!
          </p>
          <button>Nossas Lojas</button>
        </div>
      </main>
      <footer className={estilos.footer_container}>
        <h3>Desenvolvido por Gabriel ferreira</h3>
        <div>
          <span>Acesse: </span>
          <button className={estilos.botao}><Link href="https://github.com/GabrielFR-Dev" target='_blanck'>{<FaGithub />}</Link></button> {/*Icones  */}
        </div>
      </footer>
    </div>
  )
}