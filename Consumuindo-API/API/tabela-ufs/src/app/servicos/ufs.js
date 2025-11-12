import axios from "axios";

export async function retornaUfs() {
    const endopoint = 'https://www.devmedia.com.br/projetos-api/ufs';
    const listaUfs = (await axios.get(endopoint)).data;

    return listaUfs;
}