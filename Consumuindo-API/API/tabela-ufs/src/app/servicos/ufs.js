import axios from "axios";

export async function retornaUfs() {
    try {
        const endopoint = 'https://www.devmedia.com.br/projetos-api/ufs';
        const dados= (await axios.get(endopoint, { timeout: 10000})).data;
        return dados;
    } catch (error) {
        return {erro: "Erro ao acessar a API de Ufs: "+ error.message};
    }
    

    
}