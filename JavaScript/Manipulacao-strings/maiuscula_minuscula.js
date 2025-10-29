let email_acesso = "gabrielferreira@gmail.com";
let email_cadastro = "GABRIELFERREIRA@gmail.com";

if (email_acesso.toLowerCase() == email_cadastro.toLocaleLowerCase() ){
                                        
    console.log("Fou enviado um link de ativação para o seu email.")

    //as duas variaveis foi convertida para letras minusculas    
} else {
    console.log("Esse email não existe em nossa base de dados")
}

// .toUpperCase() = Maiúsculas
// .toLowerCase() = Minúsculas