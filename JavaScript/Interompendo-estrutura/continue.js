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

    
    //Se a média do aluno for menor que 6, a iteração atual será interrompida, e o próximo aluno será percorrido no loop
    if ( aluno.media < 6) {
        continue; //O loop é interrompido avançando para a próxima iteração
    }

    
    //Se a condição acima for verdadeira, essas linhas de código não serão executadas na iteração atual
    console.log("Id: " + aluno.id);     
    console.log("Nome: " + aluno.nome);
    console.log("Média " + aluno.media);
    console.log("\n");
}