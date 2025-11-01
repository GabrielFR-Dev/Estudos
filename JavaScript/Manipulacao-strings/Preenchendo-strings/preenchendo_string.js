//Para preeencher uma string com um determinado caratere basta usar os métodos padStart() e padEnd()

//Sintaxe 
//Nome da variavel e Metodo nativo .padEnd()

// label_nome.padEnd(25, ".")
                //Total de caracteres que a string terá
                //Caractere para preencher no final da string
                    

let label_nome  = "Nome:"; //variaveis
let valor_nome = "Jorge Luiz";

let label_profissao = "Profissão:";
let valor_profissao = "Professor";

let label_endereco = "Endereço:";
let valor_endereco = "Rua Cruzeiro do Sul";

console.log( label_nome.padEnd(25, ".") + valor_nome);
console.log( label_profissao.padEnd(25, ".") + valor_profissao);
console.log( label_endereco.padEnd(25, ".") + valor_endereco);




// Utilizamos o .padEnd para obtermos o alinhamento

//padStart preenche o inicio da string.

//padEnd preenche o final ou meio etc da string.

//Com os metodos padStart() e padEnd() é possivel alinhas informações com a linguagem JavaScript de forma que a exibição dos dados não fique desordenada