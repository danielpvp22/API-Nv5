import { Injectable } from '@angular/core';
import { Livro } from '../app/livro';

var baseURL = 'http://localhost:3030/livros';

interface LivroMongo {
  _id: String | null;
  codEditora: Number;
  titulo: String;
  resumo: String;
  autores: String[];
}

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  constructor() {}

  public async obterLivros() {
    try {
      const response = await fetch(baseURL, {
        method: 'GET'
      });

  
      if (!response.ok) {
        throw new Error('Erro ao obter os livros');
      }
  
      const data = await response.json() as LivroMongo[];
  
      const livros: Livro[] = data.map((livroData) => ({
        codigo: livroData._id || '',
        codEditora: livroData.codEditora,
        titulo: livroData.titulo,
        resumo: livroData.resumo,
        autores: livroData.autores,
      }));
  
      return livros;
    } catch (error) {
      console.error('Erro ao obter os livros:', error);
      throw error;
    }
  }

  public async incluir(livro: Livro) {
    try {
      const livroMongo: Omit<LivroMongo, '_id'> = {
        ...livro,
      };

      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(livroMongo)
      });

      if (!response.ok) {
        throw new Error('Erro ao incluir o livro');
      }

      const data = await response.json();
      return data.ok;
    } catch (error) {
      console.error('Erro ao incluir o livro:', error);
      return false;
    }
  }

  public async excluir(codigo: String) {
    try {
      const response = await fetch(`${baseURL}/${codigo}`, {
        method: 'DELETE'
      });
  
      if (!response.ok) {
        throw new Error('Erro ao excluir o livro');
      }
  
      const data = await response.json();
      return data.ok;
    } catch (error) {
      console.error('Erro ao excluir o livro:', error);
      return false;
    }
  }
}
