// Funcções com parâmetros recebem valores para serem usados em seus blocos de código


// Função com parâmetro...

//A Calcula_media retorna o status de um aluno de acordo com sua média. Note que entre os parênteses, temos dois valores sendo passados, oque significa dizer que se trata de uma função com parâmetro
function calcula_media(nota_1, nota_2){

    let media = (nota_1 + nota_2) / 2; // Os dois parâmetros são usados para o cálculo da média, esse caálculo é atribuido à variavel media

    let status; // Variàvel que vai guardar o status do aluno

    if(media >= 6 ){  // Aqui temos uma condição que verifica se a média do aluno é maior ou igual a 6. Caso a confição seja verdadeira, o aluno está aprovado, caso contrário, ele está reprovado
        status = "Aluno aprovado !";
    } else {
        status = "Aluno reprovado !";
    }

    return status; //A função retorna o status do aluno

}

//Sempre que for necessário retornar o status de um aluno, basta criar uma variável e atribuir o retorno da função a ela

let status_aluno_1 = calcula_media(7, 8);
console.log(status_aluno_1);

let status_aluno_2 = calcula_media(4, 7);
console.log(status_aluno_2);

// O usso de funções com parâmetro nos ajuda a reaproveitar um bloco de código que recebe valores para usá-los em suas tarefas

// Quando precisamos de uma função que precisa receber valores para usá-los no seu código, usamos funções com parâmetro