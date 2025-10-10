/*Estrututando pagina teste Props */

import Topo from "@/componente/topo";
import estilos from "./page.module.css";
import Card from "@/componente/card";
import Aquario from "/public/aquario.jpg";
import Aries from "/public/aries.jpg";
import Cancer from "/public/cancer.jpg";
import Capricornio from "/public/capricornio.jpg";
import Escorpiao from "/public/escorpiao.jpg";
import Gemeos from "/public/gemeos.jpg";
import Leao from "/public/leao.jpg";
import Libra from "/public/libra.jpg";
import Peixes from "/public/peixes.jpg";
import Sagitario from "/public/sagitario.jpg";
import Touro from "/public/touro.jpg";
import Virgem from "/public/virgem.jpg";


export default function Home() {
  return (
    <div>
      <Topo />
      <main className={estilos.secao_card}>
        <section className={estilos.container_card}>
          <Card
            signo={"Aquário"}
            dataInicio={"21/01"}
            dataFim={"19/02"}
            imagem={Aquario}
          />
          <Card
            signo={"Peixes"}
            dataInicio={"20/02"}
            dataFim={"20/03"}
            imagem={Peixes}
          />
          <Card
            signo={"Áries"}
            dataInicio={"21/03"}
            dataFim={"20/04"}
            imagem={Aries}
          />
          <Card
            signo={"Touro"}
            dataInicio={"21/04"}
            dataFim={"21/05"}
            imagem={Touro}
          />
          <Card
            signo={"Gêmeos"}
            dataInicio={"22/05"}
            dataFim={"21/06"}
            imagem={Gemeos}
          />
          <Card
            signo={"Câncer"}
            dataInicio={"21/06"}
            dataFim={"23/07"}
            imagem={Cancer}
          />
          <Card
            signo={"Leão"}
            dataInicio={"24/07"}
            dataFim={"23/08"}
            imagem={Leao}
          />
          <Card
            signo={"Virgem"}
            dataInicio={"24/08"}
            dataFim={"23/09"}
            imagem={Virgem}
          />
          <Card
            signo={"Libra"}
            dataInicio={"24/09"}
            dataFim={"23/10"}
            imagem={Libra}
          />
          <Card
            signo={"Escorpião"}
            dataInicio={"24/10"}
            dataFim={"22/11"}
            imagem={Escorpiao}
          />
          <Card
            signo={"Sagitário"}
            dataInicio={"23/11"}
            dataFim={"21/12"}
            imagem={Sagitario}
          />
          <Card
            signo={"Capricórnio"}
            dataInicio={"22/12"}
            dataFim={"20/01"}
            imagem={Capricornio}
          />
        </section>
      </main>


    </div>
  );
}
