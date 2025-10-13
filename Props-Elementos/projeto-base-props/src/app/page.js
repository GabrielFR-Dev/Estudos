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
    <>
      <header className={estilos.topo}>
        <div className={estilos.container_logo}>
          <Image
            src={Dente}
            alt="Logo dentens saudaveis"
            title="logo "
          />
          <p>
            Dentes Saudáveis
          </p>
        </div>
      </header>

      {/* APRESENTAÇÃO  */}
      <section className={estilos.secao_apresentacao}>
        <div className={estilos.apresentacao}>
          <h1>
            OS MELHORES <span>APARELHOS DENTÁRIOS</span>!
          </h1>
          <p>
            Confira abaixo todas as  especialidade odontológicas que temos à sua disposição!
          </p>
        </div>

        <ul className={estilos.lista_servicos}>
          <li>
            <Image src={Dente} alt="logo" title="Logo" />
            <p>Pré-avaliação</p>
          </li>

          <li>
            <Image src={Dente} alt="logo" title="Logo" />
            <p>Raio-X digital</p>
          </li>

          <li>
            <Image src={Dente} alt="logo" title="logo" />
            <p>Aparelho Dentários</p>
          </li>

          <li>
            <Image src={Dente} alt="logo" title="logo" />
            <p>Clareamento dental</p>
          </li>
        </ul>
      </section >


      {/* SECAO BENEFICIOS */}

      <section className={estilos.secao_beneficio}>
        <div>
          <h2 className={estilos.subtitulo}>
            POR QUE USAR <span>APARELHO?</span>
          </h2>
          <figure className={estilos.container_img_aparelho}>
            <Image src={Aparelho}
              alt="Imagem do uso de um aparelho"
              title="Imagem do uso de um aparelho" />
          </figure>
        </div>

        <ul className={estilos.lista_beneficios}>
          <li>
            <h3>Alinhar os dentes</h3>
            <p>
              Dentes desalinhados causam problemas nos dentes e podem aafetar a digestão dos alimentos e a respiração.
            </p>
          </li>

          <li>
            <h3>Melhorar a dicção e a higiene dentária</h3>
            <p>
              Muitas pessoas não conseguem nem usar fio dental devido à posição da sua dentição. Contudo, a correção possibilita o cuidado com a saúde bucal de forma bem mais ampla.
            </p>
          </li>

          <li>
            <h3>Corrigir espaço entre os dentes</h3>F
            <p>
              Uma dentição desalinhada e com espaços significativos incomodam muitas pessoas. Usar aparelho nos dentes é uma das formas mais eficientes para que esses problemas possam ser corrigidos.
            </p>
          </li>
        </ul>
      </section>


      {/*CONTAINER DEPOIMENTOS */}
      <section className={estilos.secao_depoimento}>
        <h2>
          VEJA O QUE <span>CLIENTES</span> ESTÃO FALANDO...
        </h2>

        <div className={estilos.container_depoimentos}>
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

      {/*SECAO INFORMACOES */}
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

          <MolduraInformacoes>
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
          </MolduraInformacoes>

          <MolduraInformacoes>
            <p>Ligue para agendar uma consulta: </p>
            <p>(00) 0000 - 0000</p>
            <p>(99) 9999 - 9999</p>
          </MolduraInformacoes>
        </div>
      </section>


      {/*SECAO LOCALIZAÇÃO */}
      <section className={estilos.secao_localizacao}>
        <div>
          <h2 className={estilos.subtitulo}>
            ONDE ESTAMOS <span>LOCALIZADOS?</span>
          </h2>
          <p>
            Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro - RJ. CEP: 22775-904
          </p>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.111392959523!2d-43.36795292380455!3d-22.98293094059837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda293e673b27%3A0xc823a7a4acbf3512!2sAv.%20Ayrton%20Senna%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1760356336499!5m2!1spt-BR!2sbr" referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section >

      {/*RODAPE */}
      <footer className={estilos.rodape}>
        <div> @Gabriel ferreira </div>
      </footer>
    </>
  );
}
