// O timestamp é uma representação numérica de uma data UTC

const hoje = new Date();

console.log("\n" + hoje.valueOf() + "\n\n" );

// O valor retornado é a quantidade de milissegundos que se passaram desde Unix Epoch(1 de janeiro de 1970 às 00:00:00)

// TIMESTAMP POR QUE É UTIL

//Atrasvés do timestamp conseguimos verificar quanto tempo se passou entre uma data e outra

const dataAtual = new Date();
const dataPostagem = new Date('2025-11-01T00:00');

const timeAtual = dataAtual.getTime();
const timePostagem = dataPostagem.getTime();

const diferenca = timeAtual - timePostagem;

const segundos = diferenca / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;

console.log(horas);

