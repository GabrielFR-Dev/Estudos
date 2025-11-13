try {
    const conteudo = "Hello word";
    const arrayConteudo = conteudo.split(" ")

    const palavra = arrayConteudo[0];

    console.log(palavra);
} catch (error) {
    console.log("erro: " + error.message);
}