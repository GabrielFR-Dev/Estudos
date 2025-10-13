import estilos from "./CardDepoimento.module.css";
import Image from "next/image";


export default function CardDepoimento (props) {
    return(
        <div className={estilos.card_elemento}>
            <Image className={estilos.img_aparelho}
            src={props.imagem}
            alt={props.nome}
            titile={props.nome}
            /> 
            <h3>{props.nome}</h3>
            <p>{props.descricao}</p>
        </div>
    )
}