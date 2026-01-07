const express = require('express');
const app = express();

const calculadoraIMC = require('./calculadoraIMC');

app.get('/', (req, res) => {

    let peso = req.query.peso;
    let altura = req.query.altura;

    let imc = calculadoraIMC.efetuarCalculoImc(peso, altura);

    res.json({imc: imc});
});

app.listen(8080, () => {
    let data = new Date();
    console.log("Servidor inciado em: " + data);
});