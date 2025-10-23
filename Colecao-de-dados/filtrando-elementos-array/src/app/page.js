'use client';
import Image from "next/image";
import estilos from "./page.module.css";
import { useState } from "react";
import { jogosExclusivos } from "@/dados/jogos";
import ItemJogos from "./componentes/ItemJogos";

export default function Home() {

  const [listaJogos, setListaJogos] = useState(jogosExclusivos);
  
  const handleFiltrarJogoPlataforma = (plataforma) => {
    setListaJogos(jogosExclusivos.filter((jogo) => jogo.plataforma === plataforma ))
  }

  const handleLimparFiltro = () => {
    setListaJogos(jogosExclusivos)
  }
  
  
  return (
    <div className="estilos.container_principal">
      <h2>Lista de Jogos Exclusivos</h2>
      
      <div className={estilos.container_btns}>
        <button onClick={() => handleFiltrarJogoPlataforma("xbox")}>XBOX</button>
        <button onClick={() => handleFiltrarJogoPlataforma("playstation")}>PlayStation</button>
        <button onClick={() => handleFiltrarJogoPlataforma("nintendo")}>Nintendo</button>
        <button onClick={() => handleLimparFiltro()}>Limpar Filtro</button>
      </div>

      <div className={estilos.container_cards}>
        { listaJogos.map((jogo, index) => (
          <ItemJogos 
            key={index}
            nome={jogo.nome}
            plataforma={jogo.plataforma}
          />
        ))}

      </div>
      
    </div>
  );
}
