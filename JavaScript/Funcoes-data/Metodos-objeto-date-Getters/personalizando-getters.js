// Personalizando o retorno toLocaleString, toLocaleDateString e toLocaleTimeString

// Podemos personalizar o retorno dos métodos toLocaleString, toLocaleDateString e toLocaleTimeString através de dois parâmetros.

// dataAtual.toLocaleString( 'en-US', options) -- (O idioma, um objeto com a forma que cada valor será retornado)

//As opções de idiomas não são suportadas em todos os dispositivos. Por exemplo no Node o Idioma pt-BR não está disponivel

// A ordem impressa pelo método. toLocaleString() será baseada no idoma indicado


//VALORES DO PARÂMETRO OPTIONS


// toLocaleString e toLocaleDateString
const personalizandoData = {

    //Wewkday
    weekday: 'long', // segunda-feira
    weekday: 'short', // seg.
    weekday: 'narrow', // S

    //Month
    month: "numeric", // 2
    month: "2-digit", // 02
    month: "long", // Março
    month: "short", // Mar
    month: "narrow", // M

    //year
    year: 'numeric', // 2020
    year: '2-digit', // 20

    //day
    day: 'numeric', // 1
    day: '2-digit', // 01    

    //dateStyle
    dateStyle: "full", // segunda-feira, 03 de novembro de 2025
    dateStyle: "long", // 03 de novembro de 2025
    dateStyle: "medium", // 03 de nov. de 2025
    dateStyle: "short", // 03/11/2025
};
console.log(dataAtual.toLocaleDateString('pt-BR', personalizandoData));


//toLaleString e toLocaleTimeString
const personalizandoTempo = {

    //Hour
    hour: 'numeric', // 1
    hour: '2-digit', // 01,

    //Minute
    minute: 'numeric', // 1
    minute: '2-digit', // 01,

    //Second
    second: 'numeric', // 1
    second: '2-digit', // 01,

    //dateStyle
    dateStyle: "full", // 15:58:08 Horário padrão de brasília
    dateStyle: "long", // 15:58:08 BRT
    dateStyle: "medium", // 15:58:08
    dateStyle: "short", // 15:58
}
console.log(dataAtual.toLocaleTimeString('pt-BR', personalizandoTempo));

const personalizandoDataTempo = {
    dateStyle: "full", // segunda-feira, 9 de novembro de 2020
    dateStyle: "long", // 9 de novembro de 2020
    dateStyle: "medium", // 9 de nov. de 2020
    dateStyle: "short", // 09/11/2020

    timeStyle: "full", // 01:05:09 Horário Padrão de Brasília
    timeStyle: "long", // 01:05:09 BRT
    timeStyle: "medium", // 01:05:09
    timeStyle: "short", // 01:05
}
console.log(dataAtual.toLocaleString('pt-BR', personalizandoDataTempo));



