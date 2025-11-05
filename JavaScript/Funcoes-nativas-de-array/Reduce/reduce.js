// A função reduce reduz um array a um único valor

const jogos = [
    {id: 1, nome: 'Galaxian', anoLancamento: 1979 },
    {id: 2, nome: 'Donkey Kong', anoLancamento: 1981 },
    {id: 3, nome: 'Ms. Pac-Man', anoLancamento: 1981 },
    {id: 4, nome: 'Asteroids', anoLancamento: 1979 },
];

//A redução do array aum único valor é feita atrasvés de um função, no nosso caso retornaNomesJogos
function retornaNomesJogos(nomes, jogo) {
    return nomes + jogo.nome + ', ';
}

//Utilizamos a função reduce para concatenar os nomes dos jogos do array jogos
const nomesJogos = jogos.reduce(retornaNomesJogos, '');
                                                //Valor inicial
                                                //Que será somado

console.log(nomesJogos.slice(0, -2));

// A função que será executada pelo reduce para cada elemento do array recebe dois parâmetros