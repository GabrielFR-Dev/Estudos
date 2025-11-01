//Quando é necessário substituir uma substrinf, basta usar o método replace()

//O método replace() substitui a primeira ocorrência encontrada

//O metodo replace() procura a primeira vez que o termo DO MUNDO aparece no texto e substitui por DA AMERICA LATINA




let texto = `O Rio de Janeiro é uma das cidades mais bonitas do mundo!
Essa cidade possui muitos pontos turísticos e inúmeras opções de lazer.
Quem vive nessa cidade é muito privilegiado!`;

let resultado = texto.replace("do mundo", "Da america latina");

console.log(resultado)

// Utilizanmos o metodo .replace() para substituir a frase "do mundo" para "Da america latina"

