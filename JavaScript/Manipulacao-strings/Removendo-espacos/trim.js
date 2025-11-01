// Para remover espaços em branco do inicio e do final a string basta usar  método trim()

let telefone_1 = "(99) 99999-9999";
let telefone_2 = "      (99) 99999-9999     ";

if (telefone_1.trim() == telefone_2.trim() ){
    console.log("Os telefones são iguais");
} else {
    console.log("OS telefones são diferentes");
}



// se não utilizarmos o método .trim() dara que os numeros de telefone sao diferentes
// por conta do espaços desnecessarios, utilizando o método trim() corrijimos esse erro.

