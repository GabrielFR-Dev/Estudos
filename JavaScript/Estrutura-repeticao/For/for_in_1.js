// A estrutura de repetição for in permite percorrer todas as propriedades de um objeto

//A estrutura for in itera cada propriedade de um objeto, seguindo a ordem que elas estão no objeto


let aluno = { nome: "Marcos", email: "marcos@email.com", idade: 25};



//dados representa a propriedade do objeto que está sendo iterada
for (let dados in aluno ) {
    console.log(aluno[dados]);
}