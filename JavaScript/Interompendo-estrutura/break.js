let funcionairos = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Gabriel", habilitado: false},
    {id: 3, nome: "Fernanda", habilitado: false},
    {id: 4, nome: "Pedro", habilitado: true},
    {id: 5, nome: "Jéssica", habilitado: false}
];

let contador = 0;
let encontrouHabilitado = false;  //Variável booleana para indicar se um funcionario habilitado foi encontrado

while (contador < funcionairos.length){
    
    let funcionario = funcionairos[contador];

    
    //Se um funcionario tiver a propriedade habilitado com o valor true, o loop será interrompido pelo comando break...

    if( funcionario.habilitado == true) {
        console.log("Funcionário habilitado encontrado: "+funcionario.nome)
        encontrouHabilitado = true
        break; //O loop é interrompido de vez
    }

    contador++
}
    

//Cso o valor da variável seja falso, a mensagem vai informar que nehum usuário habilitado foi encontrado

if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado!");
}