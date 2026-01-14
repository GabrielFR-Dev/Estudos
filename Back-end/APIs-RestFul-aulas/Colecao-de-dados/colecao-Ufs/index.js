import express from 'express';
import { buscarUfs, buscarUfPorId, buscarUfsPorNome } from './servicos/servico';

const app = express();


app.get('/ufs', (req, res) => {
    const nomeUF = req.query.busca;
    const resultado = nomeUF ? buscarUfsPorNome(nomeUF) : buscarUfs();

    if (resultado.length > 0 ) {
        res.json(resultado);
    } else {
        res.status(404).send({ "erro": "Nenhuma UF encontrada" });  
    }
});

app.get('/ufs/:iduf', (req, res) => {
    const uf = buscarUfPorId(req.params.iduf);
   
    if (uf) {
        res.json(uf);
    } else if (isNaN(paseInt(req.params.iduf))) {
        res.status(400).send({"erro": "Requisição inválida"})
    } else {
        res.status(404).send({ "erro": "UF não encontrada" });
    }
});


app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});