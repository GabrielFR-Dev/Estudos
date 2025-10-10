/*Estruturando página teste */
import estilos from "./Card.module.css";
import Image from "next/image";

export default function (props) {
    return (
      <div className={estilos.container_card}>
        <h3>{props.signo}</h3>
        <Image src={props.imagem} alt={props.signo} className={estilos.image}/>
        <span>{props.dataInicio} - {props.dataFim}</span>
      </div>
    );
}