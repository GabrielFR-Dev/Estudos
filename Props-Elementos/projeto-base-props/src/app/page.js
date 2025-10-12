import estilos from "./page.module.css";
import Image from "next/image";
import Aparelho from "/public/aparelho.png";
import Cliente01 from "/public/cliente01.png";
import Cliente02 from "/public/cliente02.png";
import Cliente03 from "/public/cliente03.png";
import Dente from "/public/dente.png";
import Dentista01 from "/public/dentista01.png";
import Dentista02 from "/public/dentista02.png";
import CardDepoimento from "@/componente/CardDepoimento";
import MolduraInformacoes from "@/componente/MolduraInformacoes";

export default function Home() {
  return (
    <div>
      <header className={estilos.topo}>
        <image src={Dente} alt={'dentes'} />
        <p>
          Dentes Saudáveis
        </p>
      </header>

      <main>
        <section className={estilos.secao_apresentacao}>
          <h1>Os melhores <span>APARELHOS DENTÁRIOS</span>!</h1>
          <p>Confira abaixo todas as  especialidade odontológicas que temos à sua disposição!</p>
          <div>
            <Image src={Dente} alt={"DENTES"}/>
            <p>Pré-avaliação</p>

            <Image src={Dente} alt={"DENTES"}/>
            <p>Raio-X digital</p>

            <Image src={Dente} alt={"DENTES"}/>
            <p>Aparelho Dentários</p>

            <Image src={Dente} alt={"DENTES"}/>
            <p>Clareamento dental</p>
          </div>
        </section>

        <section className={estilos.secao_beneficio}>

        </section>

        <section className={estilos.secao_depoimento}>
          <div>
            <CardDepoimento
              imagem={Cliente01}
              nome={"Alberto"}
              descricao={"Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com prosissionalismo e cuidado."}
            />
            <CardDepoimento
              imagem={Cliente02}
              nome={"Eliana"}
              descricao={"O Dentes Saudáveis é um consultório odontológico que oferece um atendimento excepcional e resultados incríveis."}
            />
            <CardDepoimento
              imagem={Cliente03}
              nome={"Carla"}
              descricao={"Recomendo o Dentes Saudáveis para quem busca um atendimento odontológico de qualidade e resultados duradouros."}
            />
          </div>
        </section>

        <section className={estilos.secao_informacoes}>
          <div className={estilos.container_informacoes}>
            <MolduraInformacoes>
              <ul className={estilos.lista_horarios}>
                <li>Segunda- 09:00 às 18:00</li>
                <li>Terça - 09:00 às 18:00</li>
                <li>Quarta - 09:00 às 18:00</li>
                <li>Quinta  - 09:00 às 18:00</li>
                <li>Sexta - 09:00 às 17:00</li>
                <li>Sabado - 09:00 às 12:00</li>
              </ul>
            </MolduraInformacoes>
            <div className={estilos.card}>
              <figure>
                <Image
                  className={estilos.img_aparelho}
                  src={Dentista01}
                  alt="Dr. Ana"
                  title="Dr. Ana"
                />
              </figure>
              <div>
                <p>Dra. Ana - Ortodontista</p>
                <p>Segundas e sextas</p>
              </div>
            </div>
            <div className={estilos.card}>
              <figure>
                <Image
                  className={estilos.img_aparelho}
                  src={Dentista02}
                  alt="Dr. Carlos"
                  title="Dr. Carlos"
                />
              </figure>
              <div>
                <p>Dr. Carlos - Endodontia</p>
                <p>Terças e quartas</p>
              </div>
            </div>

            <MolduraInformacoes>

            </MolduraInformacoes>

            <MolduraInformacoes>
              <p>Ligue para agendar uma consulta: </p>
              <p>(00) 0000 - 0000</p>
              <p>(99) 9999 - 9999</p>
            </MolduraInformacoes>



          </div>

        </section>

        <section className={estilos.secao_localizacao}>

          <div className={estilos.iframe}>

          </div>

        </section>

      </main>

      <footer className={estilos.rodape}>

      </footer>





    </div>
  );
}
