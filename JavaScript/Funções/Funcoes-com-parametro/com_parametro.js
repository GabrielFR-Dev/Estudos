// Função com parâmetro...

function calcula_media(nota_1, nota_2){

    let media = (nota_1 + nota_2) / 2;
    let status;

    if(media >= 6 ){
        status = "Aluno aprovado !";
    } else {
        status = "Aluno reprovado !";
    }

    return status;

}

let status_aluno_1 = calcula_media(7, 8);
console.log(status_aluno_1);

let status_aluno_2 = calcula_media(4, 7);
console.log(status_aluno_2);