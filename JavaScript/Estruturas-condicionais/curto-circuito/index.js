//sintaxe:

 //condição
// nota > 7   &&   (status = 'Aprovado');
             //if   //Codigo excutado se a condição for atendida(true)



//Declara~ção da constante nome.
const nome = 'Camila';

//Aqui é verificado se o nome possui ao menos 1 caractere.
//Retorna true se a variável nome tiver pelo menos 1 caractere.
//Retorna false se a variável nome for vazia.
const nomeValido = nome.length > 0;

//Imprime a variável nome se ela tiver pelo menos 1 caractere.
//Se a variável nome for vazia o console.log não será executado.
nomeValido && console.log(nome);