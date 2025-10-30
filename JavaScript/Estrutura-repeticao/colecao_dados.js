let alunos = [ //Coleção de dados
    "Gabriel",
    "Fernanda",
    "Michele",
    "Osvaldo",
    "Felipe",
    "Lana"
];

let contador = 0;

console.log("Temos o total de: "+alunos.length+" Alunos Dentro da sala de aula"); //contando quantos alunos tem

while( contador < alunos.length){
    
    let aluno_nome = alunos[contador];

    console.log("O "+contador+"º aluno chama: "+aluno_nome);
    contador++
}
