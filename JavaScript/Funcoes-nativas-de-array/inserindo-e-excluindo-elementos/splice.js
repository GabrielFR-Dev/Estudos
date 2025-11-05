// A função splice remove um ou mais elementos de um array.

const diasDaSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabado"
]

diasDaSemana.splice(2, 1);

//A função splice recebe dois parâmetros, A poisição incial, Quantos elementos serão removidos

//Em alguns casos queremos remover o último ou o primeiro elemento de um array. Para isso utilizamos as funções pop e shift,

diasDaSemana.pop(); //Removendo o primeiro elemento "Domingo"
diasDaSemana.shift(); //Removendo o ultimo elemento "Sabado"