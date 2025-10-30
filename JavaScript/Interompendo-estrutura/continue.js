let alunos = [
    {id: 1, nome: "Gabriel", media: 5},
    {id: 2, nome: "Laura", media: 8},
    {id: 3, nome: "Jóse", media: 8},
    {id: 4, nome: "Guilherme", media: 6},
    {id: 5, nome: "Rafael", media: 9}

];

let contador = 0;

while ( contador < alunos.length) {
    
    let aluno = alunos[contador];

    contador++;

    if ( aluno.media < 6) {
        continue;
    }

    console.log("Id: " + aluno.id);
    console.log("Nome: " + aluno.nome);
    console.log("Média " + aluno.media);
    console.log("\n");
}