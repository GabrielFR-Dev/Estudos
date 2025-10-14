import estilos from "./CardInformacoes.module.css";

export default function CardInformacoes(props) {
    return (
        <div className={estilos.card_informacao}>
            <h3>Informação sobre o {props.tipoAnimal}</h3>
            <p>{props.InformacaoAnimal}</p>
        </div>
    );
}