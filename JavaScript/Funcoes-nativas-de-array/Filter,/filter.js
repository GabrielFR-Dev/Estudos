// A função filter é utilizada para filtrar os elementos de um array e criar um novo array com apenas os elementos que atendem À uma condição

const produtos = [
    {id: 1, nome: 'Açucar', ativo: true, valor: 2.00},
    {id: 2, nome: 'Álcool 70', ativo: false, valor: 9.95},
    {id: 3, nome: 'Luvas descartáveis', ativo: false, valor: 2.50},
    {id: 4, nome: 'Papel toalha', ativo: true, valor: 2.50},
];

//Caso o retorno seja true a função filter vai guardar o produto no novo array.
function verificaProdutoAtivo (produto){
    return produto.ativo == ativo;
}

//Executando a função verificaProdutoAtivo para cada elemento do array produtos.
const produtosAtivos = produtos.filter(verificaProdutoAtivo);

console.log(produtosAtivos);