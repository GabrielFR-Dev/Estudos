import historicoInflacao from "../dados/dados.js";



export const retornaTodaColecao = () => {
    return historicoInflacao;
}

export const retornaAnoEspeficifico = (anoIpca) => {
    const dadosAno = historicoInflacao.filter(ano => ano.ano === parseInt(anoIpca));
    return dadosAno;
}

export const retornaIdEspecifico = (id) => {
    const idIpca = Number(id);
    const dadosId = historicoInflacao.find(item => item.id === idIpca);
    return dadosId
};