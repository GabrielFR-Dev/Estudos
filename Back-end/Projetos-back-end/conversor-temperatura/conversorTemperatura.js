function converteParaFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32;

    return fahrenheit;
}
function converteParaCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8;
    
    return celsius;
}

function converteTemperatura(temperatura, conversor) {

    let resultado;
    let conversorAtualizado = conversor.toLowerCase();

    if(conversorAtualizado == 'c')
    {
        resultado = converteParaCelsius(temperatura);
    }
    else if(conversorAtualizado == 'f')
    {
        resultado = converteParaFahrenheit(temperatura);
    }
    else 
    {
        resultado = 'Erro: Tipo de conversão inválida.';
    }
    return resultado;
}

function validaParametro(parametro){
    if(isNaN(parametro)){
        return false;
    }
    else 
    {
        return true;
    }
}

exports.validaParametro = validaParametro;
exports.converteTemperatura = converteTemperatura;