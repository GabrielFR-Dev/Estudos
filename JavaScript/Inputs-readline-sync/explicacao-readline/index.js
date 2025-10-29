// para inicar um aplicao java scrip com o input antes precisamos instalar um plugin
// npm init -y
// npm install readline-sync
// depois temos que ir no arquivo package.json e colocar a seguinte linha no arquivo "type": "module",
// isso já deixa o documento apto para utilizar o input, mas lógico tem que fazer a importação, confira logo abaixo.

import entradaDados from 'readline-sync';  //Esse código inicia importando o nosso puglin

let nome = entradaDados.question('Digite seu nome: ') // utilizamos a variavel que esta o readline-sync
console.log("Olá,  "+nome);

// a funcao .question faz parte do readline-sync, e é ela quem implementa o input