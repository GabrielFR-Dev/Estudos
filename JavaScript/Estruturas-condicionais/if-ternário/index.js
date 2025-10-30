// É possível escrever uma estrutura if/else de uma forma simplificada que chamamos de if ternário


//Define a variavel com o dia da semana (0 = Domingo, 1 = Segunda...)
var dia_semana = 5;

//Verifica a condição e define o resultado na variável 'Status_loja'
                  
                  //-----------Condição--------------- 
var status_loja = (dia_semana == 0 || dia_semana == 6 ) ? "Funcionamos apenas de Segunda à Sexta" : "Loja aberta";                                              //if                                     //else


//Imprime o resultado no console
console.log(status_loja);