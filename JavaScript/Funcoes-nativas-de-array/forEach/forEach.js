// A função forEach é usada para percorrer um array e executar uma função para cada elemento

const produtos = [
    {id: 1, nome: 'Açucar', estoque: 100, valor: 2.00},
    {id: 2, nome: 'Álcool 70', estoque: 50, valor: 9.95},
    {id: 3, nome: 'Luvas descartáveis', estoque: 1000, valor: 2.50},
];

//Podemos passar para a função que será executada além do elemento a posição dele dentro do  array.
function imprimirProduto (produto, index) {
    let texto = index + " - ";
    texto += produto.estoque + ' UN - ';
    texto += produto.nome + ' - ';
    texto += 'R$ ' + produto.valor + ' - ';
    texto += 'R$ ' + produto.estoque * produto.valor

    console.log( texto );
}

//A função nativa forEach executando a função imprirProduto para cada elemento do array produtos 
produtos.forEach(imprimirProduto); 
//Nome do array, função nativa, Função que será executada em cada elemento do array

// o forEach pode ser utilizado para percorrer um array a fim de imprimir no terminal os itens de um carrinho de compra....
