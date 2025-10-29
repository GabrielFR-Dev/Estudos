import estilos from "./Topo.module.css";

export default function Topo(props) {
    return (
        <header className={estilos.container_topo}>
            {/*Componente topo */}
            <h1>Projeto props + useState</h1>
            <p>Clique no botão para mudar os componentes abaixo</p>
            <button onClick={props.clickAlterarAnimal}>Mudar Animal</button>
        </header >
    )
};