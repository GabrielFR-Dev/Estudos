import express from 'express';
import colecaoUF from './dados/dados.js';

const app = express();

app.get('/ufs', (req, res) => {
    res.json(colecaoUF);
});

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    let uf;

    if (!(isNaN(idUF))) {
        uf = colecaoUF.find(u => u.id === idUF);
    }

    if (uf) {
        res.json(uf);
    } else {
        res.status(404).send();
    }
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});