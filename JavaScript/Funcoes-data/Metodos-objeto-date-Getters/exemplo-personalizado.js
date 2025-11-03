const dataAtual = new Date();

const MesAno = {
    month: "numeric",
    year: "numeric",
}

console.log(dataAtual.toLocaleString('en-US', MesAno));

const SemanaHora = {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
}
console.log(dataAtual.toLocaleString("en-US", SemanaHora));
