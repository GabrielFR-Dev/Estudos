import estilos from "./page.module.css";
import { retornaUfs } from "./servicos/ufs";

const listaUfs = await retornaUfs();

export default function Home() {
  return (
    <main className={estilos.main}>
      <header className={estilos.header}>
        App de Ufs
      </header>
      <table className={estilos.tabela}>
        <thead>
          <tr>
            <th>ID</th>
            <th>UF</th>
            <th>NOME</th>
          </tr>
        </thead>
        <tbody>
        {
          listaUfs.erro ?
          <tr>
            <td colSpan="3">{listaUfs}</td>
          </tr>
          :
          listaUfs.map((dadosUF, index) => (
            <tr key>
              <td>{dadosUF.id}</td>
              <td>{dadosUF.uf}</td>
              <td>{dadosUF.nome}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </main>
  );
}
