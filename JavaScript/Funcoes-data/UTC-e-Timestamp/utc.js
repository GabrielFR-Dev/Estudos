// UTC é a abreviação para Tempo Universal coordenado. ele é a referência para se calcular os fusos horàrios.

const hoje = new Date();

//Imprimindo uma string com a data armazenada
console.log( hoje.toString());

//Imprimindo uma string com a data universal (UTC)
console.log( hoje.toUTCString());

//UTC é a base para se calcular uma data em um determinado fuso horário.

// UTC POR QUE É UTIL 

//Atráves do UTC conseguimos exibir corretamente uma data em cada fuso horário.


