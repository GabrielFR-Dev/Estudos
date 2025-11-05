/* 
A ordenação de um array de objetos segue as mesmas regras da ordenação de array numéricos
A única diferença é que precisamos especificar o nome do campo que será checado na função 
*/

let alunos = [
    {nome: 'Juliana', matricula: 132},
    {nome: 'Marina', matricula: 245},
    {nome: 'Gustavo', matricula: 58},
    {nome: 'Augusto', matricula: 359},
];

function ordenaMatricula(a, b){
    return a.matricula - b.matricula;
}
console.log("\nArray antes da ordenação:\n");
console.info(alunos);

alunos.sort(ordenaMatricula);

console.log("\nArray depoios da ordenação: \n");
console.info(alunos);

