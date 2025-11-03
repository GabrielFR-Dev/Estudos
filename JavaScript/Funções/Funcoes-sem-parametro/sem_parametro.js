// O que é parâmetro

// Pâmetro pe um valor que uma função recebe para usar no seu bloco de código
// Funções sem parâmetro não vão receber valores para executar em seus blocos de código


// Funcão sem parâmetro.....

// A função retorna_versao apenas retorna a versão de uma aplicação. note que entre os parênteses, não há nehum valor, o que significa dizer que e trata de uma função sem parâmetro

function retorna_versao()  // Nenhum parâmetro foi passado para a função
{
    return 1.1;  // retorno da verão
}

let versao = retorna_versao(); //Atribuimos na variável versao a função que nos retorna a versão de uma aplicação
let texto_versao = `Aplicação DevMidia - Versão: ${versao}`;

console.log(texto_versao);

// Quando uma aplicação precisar executar o mesmo código em lugares diferentes, criamos uma função para usar nesse tipo de situação