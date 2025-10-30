//A estrutua condicional if/else trabalha com condições booleanas que indicam qual caminhoo código deve seguir

// É possível utilizar diversos tipos de operadores nas condições do if/else, ou mesmo utilizar múltiplas condições

// A estrututa if/else também tem um terceiro componente, chamado ELSE IF , que é utilizado como uma segunda CONDIÇÃO



var dia_semana = 5; //Define a variavel com o dia da semana (0 = Domingo, 1 - Segunda...)

if(dia_semana == 0 || dia_semana == 6) { //Verifica se o dia da semana é sábado ou domingo
    console.log("Funcionamos apenas de Segunda à Sexta ");
    //Imprime uma mensagem informando o horário de funcionamento
}
else 
{
    //Do contrário, Informa que a loja está aberta
    console.log("Loja aberta")
}