// todo valor recebido pelo input é automaticamente convertido para STRING
// Isso é problemático quando queremos utilizar um número digitado para fazer calculos de soma pois ele so junta os numeros e não faz a soma...

// para resolver esse problema chamos a função nativa Number(), mas só é necessária quando precisamos efetuar uma soma

// Em operaçãoes de subtração, divisão e multiplicação o JS converte automaticamente os valores envolvidos de string para numero

import entradaDados from "readline-sync";

console.log("\n\n----- Seja bem vindo a calculadora -------\n\n");

console.log("Para começar digite a forma que deseja calcular\n\n");



console.log("Temos as seguintes formas de contas: \nAdicao \nSubtracao \nMultiplicao \nDivisao ");


let tiposSoma = entradaDados.question("\nDigite qual a forma que deseja calcular: ");



switch (tiposSoma) {
    case "Adicao": {
        let numero1 = entradaDados.question("\nDigite seu primeiro numero: ");
        let numero2 = entradaDados.question("\nDigite seu segundo numero: ");
        let resultado = Number(numero1) + Number(numero2);
        console.log("\nA soma entre " + numero1 + " + " + numero2 + " é igual a: " + resultado +"\n");
        break;
    }

    case "Subtracao": {
        let numero1 = entradaDados.question("\nDigite seu primeiro numero: ");
        let numero2 = entradaDados.question("\nDigite seu segundo numero: ");
        let resultado = numero1 - numero2;

        console.log("\nA Subtração entre " + numero1 + " - " + numero2 + " é igual a: " + resultado +"\n");
        break;
    }
    case "Multiplicacao": {
        let numero1 = entradaDados.question("\nDigite seu primeiro numero: ");
        let numero2 = entradaDados.question("\nDigite seu segundo numero: ");
        let resultado = numero1 * numero2;

        console.log("\nA Multiplicao entre " + numero1 + " X " + numero2 + " é igual a: " + resultado + "\n");
        break;

    }
    case "Divisao": {
        let numero1 = entradaDados.question("\nDigite seu primeiro numero: ");
        let numero2 = entradaDados.question("\nDigite seu segundo numero: ");
        let resultado = numero1 / numero2;

        console.log("\nA Divisao " + numero1 + " / " + numero2 + " é igual a: " + resultado + "\n");
        break;
    }
    default:
        console.log("\nINVALIDO !! AINDA NAO TEM ESSA OPERACAO")


};

