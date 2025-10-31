let capital_emprestado = 3000;
let taxa_Juros = 0.02; //2%

let contador = 1;
let parcelas_totais = 5;

while (contador <= parcelas_totais) { //Condição
    let numero_parcela = contador;

    let juros_emprestimo = capital_emprestado * taxa_Juros * numero_parcela;
    let juros_emprestimo_formatado = juros_emprestimo.toFixed(2)

    console.log("A taxa de juros no período de "+ numero_parcela + " Mes(es) é de R$" +  juros_emprestimo_formatado)

    contador++;
}