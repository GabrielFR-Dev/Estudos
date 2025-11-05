// A ordenação de um array numérico atrasvés do sort nem sempre sai conforme o esperado, Poios por padrão, o .sort() ordena um array numérico com as mesmas regras da ordenação alfabética 

// Isso significa que os elementos são comparados caractere a caractere. Exemplo: Ao comparar os números 10 e 2, 10 virá antes pois 10 começa com 1 e 1 vem antes de 2 

// Para resolver esse problema, precisamos customizar a ordenação do Sort

// Para customizar a ordenação do sort, precisamos utilizar uma função padrão contendo a regra de ordenação que queremos aplicar ao array

// essa função existe em duas formas padrão na ordenação de arrays numéricos:

/*Function ordenaNumeros(a, b) 
    return a - b;
} ORDEM CRESCENTE */

/*Function ordenaNumeros(a, b) 
    return b - a;
} ORDEM DECRESCENTE */

const numeros = [10,1,2];

console.log("\nArray antes da ordenação: \n")
console.info(numeros);

function ordenaNumeros(a, b){
    console.log("A: "+a);
    console.log("B: "+b);
    console.log("");
    return a - b;
}

console.log("\nParâmetros A e B");
numeros.sort(ordenaNumeros);

console.log("\nArray depoios da ordenação:\n");
console.info(numeros);
console.log("\n");

//Note que o srot está comparando todos os itens do array e ele ir ordená-los de acordo com as regras abaixo:

/*
Se o retorno da função for menor que zero o elemento A virá antes de B
Se o retorno da função for igual a zero, as posições de A e B permanecerão inalteradas
Se o terono da função for maior que zero, então A virá depoios de B

*/