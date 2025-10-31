let clientes_array = [
    {id: 1, nome: "Mônica", telefone: "9999999-9999" },
    {id: 2, nome: "Tânia", telefone: "99999339-9999" },
    {id: 3, nome: "Carlos", telefone: "99944999-9999" },
];

for ( let cliente of clientes_array ) {
    
    let nome = cliente.nome;
    let telefone = cliente.telefone;

    console.log("Nome: " + nome + " - Telefone: " + telefone);

}