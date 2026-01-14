import express from 'express';

const app = express();

app.get('/dadados', (req, res) => {

});

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});