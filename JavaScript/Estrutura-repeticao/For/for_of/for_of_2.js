
//Array de produtos
let produtos_array = [
    {id: 1, nome: "Mouse", preco: 50 },
    {id: 2, nome: "Teclado", preco: 90},
    {id: 3, nome: "Monitor", preco: 350 },
    {id: 4, nome: "nobroak", preco: 600 }
];

let percentual_desconto = 10;


//Percorrendo o array para imprimir o novo preço dos produtos
for ( let produto of produtos_array ) {

    //Guardando o nome e o preço do produto nas variáveis nome e preco
    let nome = produto.nome; 
    let preco = produto.preco;

    //Calculando o valor do desconto e o novo preço do produto
    let valor_desconto = (preco * percentual_desconto) / 100;
    let novo_preco = preco - valor_desconto;

    console.log("Novo valor do produto " + nome + ": R$" + novo_preco + ",00");
}