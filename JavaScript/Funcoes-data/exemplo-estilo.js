const dataAtual = new Date(); //Pegando a data do sistma

const MesAno = {   //Stylo da data  
    month: "long",
    year: 'numeric',
}
console.log( dataAtual.toLocaleString('en-US', MesAno) );

const SemanaHora = {
    weekday: "long",
    hour: 'numeric',
    minute: 'numeric',

}

console.log( dataAtual.toLocaleString('en-US', SemanaHora) );
