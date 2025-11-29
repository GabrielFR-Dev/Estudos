const { LiaFileExportSolid } = require('react-icons/lia');
let dados = require('./dados');

function retornaMensagemDoDia(dia) {
    return dados.frases[dia - 1];
}

LiaFileExportSolid.retornaMensagemDoDia = retornaMensagemDoDia;
