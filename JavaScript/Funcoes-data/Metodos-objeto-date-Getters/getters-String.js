// Com esses metodos é possivel retornamos esses valores convertido em uma string

const dataAtual = new Date();


// A sintaxe que vai ser impressa tera esse valor: 

// Dia da semana (em inglês) com 3 letras, Mês (em inglês) com 3 letras, Dia do mês, ano, Hora minuto e segundo, Fuso horário, nome do fuso horário
console.log("Retorna uma string que representa o objeto: " + dataAtual.toString()) // Retorna uma string que representa o objeto

console.log("Retorna uma string com a data: "+ dataAtual.toDateString()); // Retorna uma string com a data

console.log("Retorna uma string com o tempo: " + dataAtual.toTimeString()); // Retorna uma string com o tempo

console.log("Retorna uma string com um formato universal (ISO 8601"+ dataAtual.toISOString()) // Retorna uma string com um formato universal (ISO 8601)
// O horario retornado sera sempre com o fuso horario 0


console.log("Retirba uma string com apenas a data e o tempo: " + dataAtual.toLocaleString()) //Retorna uma string com apenas a a data e o tempo

console.log("Retorna uma string com a data apenas: "+ dataAtual.toLocaleDateString()) // Retorna uma string com apenas a data 

console.log("Retorna uma string com o tempo apenas: " + dataAtual.toLocaleTimeString()) // Retorna uma string com o tempo apenas

