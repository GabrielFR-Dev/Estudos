// Arrow Functions são funções escritas de forma diferente das funcções tradicionais, Elas podem receber prâmetros ou não



//Arrow Functions...


// Note que não temos a palavra-chave Function

// Palavra-chave + nome da função, parâmetros, flecha(Arrow)
const retorna_media = (nota_1, nota_2) => {

    let media = (nota_1 + nota_2) / 2;
    return media;

}

// O retorno de uma Arrow Function é usado da mesma forma como em uma função tradicional
let media_aluno = retorna_media(9, 8);
console.log("A média do aluno é: " + media_aluno);

// As Arrow Functions funcionam de forma semelhante às funções tradicionais
// O uso de Arrow Functions tem sido cada vez mais adotado no desenvolvimento, o que se torna um bom motivo para usar essa nova forma de escrever funções.