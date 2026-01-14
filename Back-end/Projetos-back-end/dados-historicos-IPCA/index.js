import express from 'express';
import { retornaAnoEspeficifico, retornaTodaColecao, retornaIdEspecifico } from './servico/servico.js';

const app = express();


app.get('/historicoIPCA', (req, res) => {
    const ano = req.query.ano;
    const retornaColecao = retornaTodaColecao();
    
    if (ano >= 2015 && ano <= 2023) {
        const buscarAno = retornaAnoEspeficifico(ano);
        return res.json(buscarAno);
    } 
    else if (ano < 0) {
        return res.json(retornaColecao);
    }
    else {
        return res.status(400).send({ "erro": "Ano inválido. Por favor, insira um ano entre 2015 e 2023." });
    }


  
});


app.get('/historicoIPCA/:id', (req, res) => {
    const buscarId = retornaIdEspecifico(req.params.id);
    return res.json(buscarId);
});


/* app.get('/historico/ipca/:calculo', (req, res) => {

}); 4 rota de calculo */

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});