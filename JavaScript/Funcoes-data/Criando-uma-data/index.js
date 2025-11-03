// Criar um objeto do tipo Date é bem simples Primeiro criamos uma variável
// Em seguida atribuimos à ela uma instância do objeto do tipo Date.
// Nesse caso criamos um objetoque possui a data atual do sistema 

//Sem parâmetro: Data Atual
const dataAtual = new Date();

console.log(dataAtual); // 2025-11-09T13:58:44.60Z

// Existem alguns pârametreos que podemos passar para o construtor quando criamos uma data. eles podem ser:

// Com parâmetro String com uma data
const exemplo1 = new Date(  "2025-11-03" );
const exemplo2 = new Date( "2025-11-03 16:29:25");
console.log(exemplo1);
console.log(exemplo2);

// Números
const exemplo3 = new Date( 2025, 11, 3, 16, 35, 5, 15 );
// com parâmetro: ( ano, mês, dia, hora, minuto, segundo, milissegundo ); 


