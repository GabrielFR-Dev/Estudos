import estilos from "./CardAnimal.module.css";
import Image from "next/image";

export default function CardAnimal (props) {
    return (
        <div className={estilos.card_animal}>
            <Image src={props.imagemAnimal} alt="Animal"/>
        </div>
    )
}