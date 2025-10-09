/*Estruturando página teste */


export default function (props) {
    return (
        <div>
        <h1>{props.titulo}</h1>
        <h2>R$ {props.preco},00</h2>
        <p></p>
        <small></small>
        </div>
    );
}