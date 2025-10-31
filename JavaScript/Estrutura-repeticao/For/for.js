import entradaDados from "readline-sync";



console.log("----- TABUADA -----\n\n");

let multiplicador = entradaDados.question("Informe o numero que deseja ver a tabuada: ");


console.log(`\nVoce acaba de escolher a tabuada do ${multiplicador}\n`);


//Inialização da variavel, condição, incremento
for(let contador = 0; contador <= 10; contador++){

    
    //Enquanto a condição for verdadeira, esse código será executado
    let soma = contador * multiplicador;


    console.log(`${multiplicador} X ${contador} = ${soma} `)
};

console.log("\n\n")