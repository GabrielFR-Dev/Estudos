/*Estrututando pagina teste Props */

import Image from "next/image";
import Topo from "@/componente/topo";
import estilos from "./page.module.css";
import Card from "@/componente/card";

export default function Home() {
  return (
    <div>
      <Topo />
      <main>
        <section>
          <Card
            signo={"Aquário"}
            dataInicio={"21/01"}
            dataFim={"19/02"}
          />
          <Card
            signo={"Peixes"}
            dataInicio={"20/02"}
            dataFim={"20/03"}  
          />
          <Card
            signo={"Áries"}
            dataInicio={"21/03"}
            dataFim={"20/04"}
          />
          <Card
            signo={"Touro"}
            dataInicio={"21/04"}
            dataFim={"21/05"}
          />
          <Card
            signo={"Gêmeos"}
            dataInicio={"22/05"}
            dataFim={"21/06"}
          />
          <Card
            signo={"Câncer"}
            dataInicio={"21/06"}
            dataFim={"23/07"}
          />
          <Card
            signo={"Leão"}
            dataInicio={"24/07"}
            dataFim={"23/08"}
          />
          <Card
            signo={"Virgem"}
            dataInicio={"24/08"}
            dataFim={"23/09"}
          />
          <Card
            signo={"Libra"}
            dataInicio={"24/09"}
            dataFim={"23/10"}
          />
          <Card
            signo={"Escorpião"}
            dataInicio={"24/10"}
            dataFim={"22/11"}
          />
          <Card
            signo={"Sagitário"}
            dataInicio={"23/11"}
            dataFim={"21/12"}
          />
          <Card
            signo={"Capricórnio"}
            dataInicio={"22/12"}
            dataFim={"20/01"}
          />
        </section>
      </main>


    </div>
  );
}
