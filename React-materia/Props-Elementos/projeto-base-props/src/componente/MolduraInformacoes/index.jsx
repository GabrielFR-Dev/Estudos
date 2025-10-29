import estilos from "./MolduraInformacoes.module.css";


export default function MolduraInformações(props) {
    return (
        <div className={estilos.moldura}>
            <h3>Informações</h3>
            <div className={estilos.info}>{props.children}</div>

        </div>
    )
}
