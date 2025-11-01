//O substring() é um método nativo do JavaScript que nos permite extrair partes de uma string

//O conteudo extraido pelo substring é definido pela posição dos caracteres na string.... .substring(7, 18);


let conteudo = "O brasil deveria ser pais de primeiro mundo, so que os politicos não são honestos";

let tamanho = conteudo.length;
let resumo = "";



if ( tamanho > 100){
    resumo = conteudo.substring(0, 97);
    resumo += "...";
} else {
    resumo = conteudo;
}

console.log(resumo)

// Utilizamos o substring() para extrair partes da string
// ex.    let resultado  = conteudo.substring(1, 7);   o resultado sera = brasil
