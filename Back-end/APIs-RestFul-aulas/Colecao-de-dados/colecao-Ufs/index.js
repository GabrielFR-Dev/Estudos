import express from 'express';
import colecaoUF from './dados/dados.js';

const app = express();

const buscarUfsPorNome = (nomeUF) => {
    return colecaoUF.filter(uf => uf.nome.toLowerCase().includes(nomeUF.toLowerCase()));
}

app.get('/ufs', (req, res) => {
    const nomeUF = req.query.busca;
    const resultado = nomeUF ? buscarUfsPorNome(nomeUF) : colecaoUF;

    if (resultado.length > 0 ) {
        res.json(resultado);
    } else {
        res.status(404).send({ "erro": "Nenhuma UF encontrada" });  
    }
});

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    let uf;
    let mensagemErro = '';

    if (!(isNaN(idUF))) {
        uf = colecaoUF.find(u => u.id === idUF);
        if (!uf) {
            mensagemErro = 'UF não encontrada';
        }
    } else {
        mensagemErro = 'Requisição inválida';
    }

    if (uf) {
        res.json(uf);
    } else {
        res.status(404).send({ "erro": mensagemErro });
    }
});


app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});