const carros = [
    {marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015},
    {marca: 'GM', modelo: 'Onix', anoFabricacao: 2018},
    {marca: 'Ford', modelo: 'K4+', anoFabricacao: 2018},
    {marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020},
];

function retornaCarroFiat(carro) {
    return (carro.marca == 'Fiat');
}

const carrosFiat = carros.filter( retornaCarroFiat );

console.log(carrosFiat);