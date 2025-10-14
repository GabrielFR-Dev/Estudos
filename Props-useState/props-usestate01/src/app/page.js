'use client'
import { useState } from "react"; 
import Image from "next/image";
import imagemCachorro from "/public/cachorro.jpg";
import imagemGato from "/public/gato.jpg";

import estilos from "./page.module.css";

export default function Home() {
  let imagemAnimal = "";
  let InformacaoAnimal = "";
  let tipoAnimal = "Cachorro";

  const [tipoDoComponenteCard, setTipoDocomponenteCard] = useState("cachorro");

  const alterarState = () => {
    if (tipoDoComponenteCard === "cachorro") {
      setTipoDocomponenteCard("gato");
    } else {
      setTipoDocomponenteCard("cachorro")
    }
  };

  if (tipoDoComponenteCard === "cachorro") {
    imagemAnimal = imagemCachorro;
    InformacaoAnimal = "É um mamífero carnívoro da familia dos canideos.";
    tipoAnimal = "Cachorro";
  } else {
    imagemAnimal = imagemGato;
    InformacaoAnimal = "é um mamifero carnivoro da familia dos felideos";
    tipoAnimal = "Gato";
  }
  

  

  return (
   <div className={estilos.container_principal}>
    {/* Componente topo */}
    <header>
        <h1>Projeto props + useState</h1>
        <p>Clique no botão para mudar os componentes abaixo</p>
        <button onClick={alterarState}>Mudar Animal</button>
    </header>

    <main>
      {/* Componente CardAnimal  */}
      <div className={estilos.card_animal}>
        <Image src={imagemAnimal} alt={tipoAnimal}/>
      </div>

      {/*Componente CardInformacoes */}
      <div className={estilos.card_informacao}>
        <h3>Informação sobre o {tipoAnimal}</h3>
        <p>{InformacaoAnimal}</p>

      </div>
    </main>

   </div>
  );
}
