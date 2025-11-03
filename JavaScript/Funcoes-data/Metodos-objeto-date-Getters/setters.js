//Metodos setters usados para alterar um valor do objeto date.

const dataAtual = new Date();

dataAtual.setFullYear(2005);        // Altera o ano
console.log( dataAtual );

dataAtual.setMonth(1);              // Altera o mês (0 á 11)
console.log( dataAtual );

dataAtual.setDate(20);              // Altera o dia do mês
console.log( dataAtual );

dataAtual.setHours(11);             // Altera a hora (0 á 23)
console.log( dataAtual );

dataAtual.setMinutes(0);            // Altera os minutos (0 á 59)
console.log( dataAtual );

dataAtual.setSeconds(59);           // Altera os segundos (0 á 59)
console.log( dataAtual );

dataAtual.setMilliseconds(15);      // Altera os millisegundos
console.log( dataAtual );

// Assim como os getters, para cada método setter acima existe um similar para setar o valor UTC

dataAtual.setUTCFullYear(1998);
dataAtual.setUTCMonth(5);
dataAtual.setUTCDate(20);
dataAtual.setUTCHours(11);
dataAtual.setUTCMinutes(0);
dataAtual.setUTCSeconds(59);
dataAtual.setUTCMilliseconds(15);

// Outro metodo que pode ser utilizado para alterar uma data é o setTime()

dataAtual.setTime() //Altera o timestamp da data


