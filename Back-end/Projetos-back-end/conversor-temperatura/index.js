const express = require('express');
const app = express();

const conversorTemperatura = require('./conversorTemperatura');

app.get('/', (req, res) => {

    if (conversorTemperatura.validaParametro(req.query.temperatura)) {
        
        let temperatura = req.query.temperatura;
        let conversor = req.query.conversor;

        let temperaturaGraus = conversorTemperatura.converteTemperatura(temperatura, conversor);

        let json = { temperatura: temperaturaGraus };
        res.json(json);
    }
    else 
    {
        res.status(400).json({ 'Erro': 'Parâmetro de temperatura inválido.' });
    }
});
app.listen(8080, () => {
    let data = new Date();

    console.log('Servidor iniciado em ' + data);
});
