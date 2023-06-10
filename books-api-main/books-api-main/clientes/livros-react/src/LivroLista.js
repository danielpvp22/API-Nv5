import { useEffect, useState } from "react";
import { ControleEditora } from "./controle/ControleEditora";
import { ControleLivros } from "./controle/ControleLivro";

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();

const LinhaLivro = (props) => {
  const { livro, excluir } = props;

  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td className="d-flex flex-column">
        {livro.titulo}
        <button className="btn btn-sm w-25 btn-danger" onClick={() => excluir(livro.codigo)}>Excluir</button>
      </td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => <li key={index}>{autor}</li>)}
        </ul>
      </td>
    </tr>
  );
};

const LivroLista = () => {
  const [carregado, setCarregado] = useState(false);
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    controleLivro.obterLivros().then(livros => setLivros(livros));  

    setCarregado(true);
  }, [carregado]);

  const excluir = (codigoLivro) => {
    controleLivro.excluir(codigoLivro).then(_ok => setCarregado(false))
  };

  return (
    <main className="p-4">
      <h1>Catálogo de Livros</h1>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autor(es)</th>
          </tr>
        </thead>
        <tbody>
          {livros.map(livro => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;