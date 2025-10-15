'use client'
import { useState } from "react";
import CardAnimal from "@/componentes/CardAnimal";
import CardInformacoes from "@/componentes/CardInformacoes";
import estilos from "./page.module.css";
import Topo from "@/componentes/Topo";

export default function Home() {

  const [tipoDoComponenteCard, setTipoDocomponenteCard] = useState("cachorro");

  const alterarState = () => {
    if (tipoDoComponenteCard === "cachorro") {
      setTipoDocomponenteCard("gato");
    } else {
      setTipoDocomponenteCard("cachorro")
    }
  };

  return (
    <div className={estilos.container_principal}>
      <Topo clickAlterarAnimal={alterarState}/>
      <main>
        <CardAnimal
          tipoAnimal = { tipoDoComponenteCard}
        />
        <CardInformacoes
          tipoAnimal={tipoDoComponenteCard}
          
        />
      </main>

    </div>
  );
}
