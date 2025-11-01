// Para obter o tamanho de uma string basta utilizar a propriedade lenght
// O tamanho da string representa a quantidade de caracteres que ela tem




let cep = "14535-000"

// if ternario 
let resultado = cep.length != 9  ? ("\no CEP deve ter 9 caracteres\n") : ("\no CEP está correto\n");

console.log(resultado)

// A Propriedade lenght é bastante usada para a validação de dados pois ela é possivel verificar o tamanho das strings, o que evita problemas como strings vazias ou com tamanho inadequado