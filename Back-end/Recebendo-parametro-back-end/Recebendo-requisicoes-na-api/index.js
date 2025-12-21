const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req.query);
    res.json({mensagem: 'parâmetro recebido pelo servidor'}) ;
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data );
})
