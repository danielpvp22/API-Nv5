import { NextPage } from "next";
import styles from '../styles/Home.module.css';
import { Livro } from "@/classes/modelo/Livro";
import { useEffect, useState } from "react";
import Head from "next/head";
import { Menu } from "@/components/Menu";
import { LinhaLivro } from "@/components/LinhaLivro";
import { ControleLivros } from "@/classes/controle/ControleLivro";

const LivroLista: NextPage = () => {
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState<boolean>();
  const controleLivros = new ControleLivros();

  const excluir = (codigo: String) => {
    controleLivros.excluir(codigo).then(_ok => setCarregado(false));
  }

  useEffect(() => {
    controleLivros.obterLivros().then(livros => {
      setLivros(livros);
      setCarregado(true);
    });
  }, [carregado])

  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>Loja Next</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
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
          {livros.map((livro, index) => (
            <LinhaLivro key={String(livro.codigo)} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
    </div>
  );
};

export default LivroLista;