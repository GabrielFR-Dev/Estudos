import entradaDados from "readline-sync";

let valor_produto = 27000;
let quantas_parcelas = entradaDados.question("Digite o valor da parcela: ");
let preco_parcela = Number(quantas_parcelas)


for ( let contador = 1; contador <= preco_parcela; contador++ )
{
    let valor_parcela = valor_produto / contador;
    console.log("N de parcelas: " + contador + " - Valor da parcela: R$" + valor_parcela.toFixed(2));
}
