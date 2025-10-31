// A estruta Switch começa atrasvés do recebimento de um parâmetro que chamamos de expressão

//Os valores mais comuns utilizados como expressão são os valores exatos dos tipos textual ou numérico

//Alem do formato simples, também é possível utilizar múltiplas cláusulas CASE para um mesmo resultado

var mes = "Janeiro";

switch (mes) {
   
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão")
        break; //utilizada para parar o comando por aqui, se nao utilizar esse comando, ele processegue sem parar

    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono");
        break;

    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Inverno");
        break;

    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Primavera");
        break;

    default:
        console.log("mês inválido");
        break;
}