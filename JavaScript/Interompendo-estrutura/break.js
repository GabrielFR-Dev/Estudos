let funcionairos = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Gabriel", habilitado: false},
    {id: 3, nome: "Fernanda", habilitado: false},
    {id: 4, nome: "Pedro", habilitado: true},
    {id: 5, nome: "Jéssica", habilitado: false}
];

let contador = 0;
let encontrouHabilitado = false;

do {
    
    let funcionario = funcionairos[contador];

    if( funcionario.habilitado == true) {
        console.log("Funcionário habilitado encontrado: "+funcionario.nome)
        encontrouHabilitado = true
        break;
    }

    contador++
} while( contador < funcionairos.length ); 
    
if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado!");
}