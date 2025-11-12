import axios from "axios";

const endopoint =  'https://www.devmedia.com.br/projetos-api/ufs';
const listaUfs = (await axios.get(endopoint)).data;

return listaUfs;
