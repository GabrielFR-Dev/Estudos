function converteParaFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32;

    return fahrenheit;
}
function converteParaCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8;
    return celsius
}

function converteTemperatura(temperatura, conversor) {

    let resultado;

    if(conversor === 'C')
    {
        resultado = converteParaCelsius(temperatura);
    }
    else if(conversor === 'F')
    {
        resultado = converteParaFahrenheit(temperatura);
    }
    else 
    {
        resultado = 'Erro: Tipo de conversão inválida.';
    }
    return resultado;
}

exports.converteTemperatura = converteTemperatura;