// A função map é utilizada para percorrer um array e criar um novo com os elementos alterados

const produtosCadastrados = [
    { id: 1, nome: 'Açucar', estoque: 100, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', estoque: 50, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', estoque: 1000, valor: 2.50 },
];

// A função retornaProduto retorna um objeto com apenas o nome e o valor do produto.
function retornaProduto(produto) {
    const produtoExibicao = {
        nome: produto.nome,
        valor: produto.valor,
    }

    return produtoExibicao;
}

//Executando a função retornaProduto para cada elemento do array produtosCadastrados
const produtosExibicao = produtosCadastrados.map(retornaProduto);

console.log(produtosExibicao);
