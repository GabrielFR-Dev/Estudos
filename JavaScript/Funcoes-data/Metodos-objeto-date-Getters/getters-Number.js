//Getters retorna um valor do tipo NUMBER

// O objeto do tipo Date possui funções nativas que são utilizadas para retornar um valor referente a data. Essas funções são chamadas de métodos.

// Veja alguns dos métodos getters usados para retornar um valor do objeto Date

const dataAtual = new Date(); // Data atual


//Para utilizar o valor retornado pelo método geMonth some 1 ao valor retornado

var resultadoMonth = 1 + dataAtual.getMonth();

console.log("Retorna o ano: " + dataAtual.getFullYear() ); // Retorna o ano
console.log("Retorna o mês (0 à 11): "+ resultadoMonth); // Retorna o mês de (0 à 11)
console.log("Retorna o dia do  mês: "+ dataAtual.getDate()); // Retorna o dia do mês
console.log("Retorna a hora (0 à 23): "+ dataAtual.getHours()); // Retorna a hora de (0 à 23)
console.log("Retorna os minutos (0 à 59): " + dataAtual.getMinutes()); // Retorna os minutos de (0 à 59)
console.log("Retorna os segundos (0 à 59): "+ dataAtual.getSeconds()); // Retorna os segundos de (0 à 59)
console.log("Retorna os milisegundos (0 à 999): "+ dataAtual.getMilliseconds());//Retorna os milisegundos (0, 999)
console.log("Retorna o dia da semana (0 à 6 ): "+ dataAtual.getDay()); //Retorna o dia da semana de (0 à 6)


// Retornando um timesstamp e o fuso horário

//Representa quantos millissegundos se passaram desde "1970-01-0 00:00:00" até "os dias atual"
console.log("\n\nRetorna o timestamp da data: " + dataAtual.getTime()); //Retorna o timestamp da data

console.log("Retorna em minutos a dirença de fuso horário: " + dataAtual.getTimezoneOffset()); //Retorna em minutos a firença de fusso horário

console.log("Retorna o valor primitivo do objeto: " + dataAtual.valueOf()) //Retorna o valor primitivo do objeto
// O valor primitivo do objeto date é um timestamp