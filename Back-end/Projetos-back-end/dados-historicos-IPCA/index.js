import express from 'express';

const app = express();


app.get('/historico/ipca', (req, res) => {
    
});


app.get('/historico/ipca/:ano', (req, res) => {

    
});


app.get('/historico/ipca/:id', (req, res) => {

});


/* app.get('/historico/ipca/:calculo', (req, res) => {

}); 4 rota de calculo */

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});