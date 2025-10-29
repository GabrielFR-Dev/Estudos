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
