//A estrutura de repetição for of permite percorrer os valores de uma coleção de dados

//A estrutura for of não precisa de um contador para iterar os valores de um array, diferente das estruturas while, do..while e for


//Array
let clientes_array = [ 
    {id: 1, nome: "Mônica", telefone: "9999999-9999" },
    {id: 2, nome: "Tânia", telefone: "99999339-9999" },
    {id: 3, nome: "Carlos", telefone: "99944999-9999" },
];


//Cada objeto do array será atribudio à variavel cliente a cada iteração

for ( let cliente of clientes_array ) { //Clientes_array será percorrido pelo laço for of
    
    let nome = cliente.nome;
    let telefone = cliente.telefone;

    console.log("Nome: " + nome + " - Telefone: " + telefone);

}