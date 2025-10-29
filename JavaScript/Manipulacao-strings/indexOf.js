let expressao_proibida = "passaporte falso";

let comentario = "     venda  PASSAPORTE FALSO "

comentario = comentario.trim();
comentario = comentario.toLowerCase();

if ( comentario.indexOf(expressao_proibida) > -1){

    console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");

} else{

    console.log("Seu comentário foi aprovado");

}


// Utilizamos o .indexOf para pesquisar a expressao_proibida dentro da string.
// Caso achamos a expressao proibida ele retornara a possição que ela está, ai sera exibida para enviar o comentario novamente.
// Caso nao encontre ele retornara o valor -1, e com isso a o comentario sera aprovado !
