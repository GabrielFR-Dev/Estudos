// Para obter o tamnho de um array na linguagem JavaScript utilizamos a propriedade LENGTH.
// length é uma propriedade que nos informa o tamanho de um array, o que evita termos de informar esse tamanho manualmente.
// Independentemente do tamanho doarray, com length podemos retornar o total de elementos

// A propriedade length é muito importante quando trabalhamos com arrays, pois com ela não precisamos nos preocupar com o total de elementos que um array possa ter

var notas_bimestre = [
    7, 6, 8, 5
];

var total_notas = notas_bimestre.length; //Obtendo o tamanho do array

var soma_notas = notas_bimestre[0] + notas_bimestre[1] + notas_bimestre[2] + notas_bimestre[3];

var media_aluno = soma_notas / total_notas;

console.log("Média do aluno: " + media_aluno); //Média do aluno: 6.5

