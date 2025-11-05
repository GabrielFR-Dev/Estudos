// A função sort ordena o conteúdo de um array e retorna esse mesmo array ordenado.
// O método sort vai percorrer o array inteiro, e como se trata de um array de strings, ele irá automaticamente colocá-lo em ordem alfabética

const frutas = ["Manga", "Laranja", "Tangerina", "Banana"];

console.log("\nArray antes da ordenação: \n");
console.info(frutas);

frutas.sort(); //Aqui utilizamos o método nativo sort para ordenar o array frutas alfabeticamente

console.log("\nArray depois da ordenação: \n");
console.info(frutas);
console.log("\n")

