import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(private servEditoras: ControleEditoraService, private servLivros: ControleLivrosService) {}

  ngOnInit(): void {
    this.editoras = this.servEditoras.getEditoras();
    this.servLivros.obterLivros().then(livros => this.livros = livros);
  };

  excluir = (codigo: String) => {
    this.servLivros.excluir(codigo).then(_ok => this.servLivros.obterLivros().then(livros => this.livros = livros));
  };

  obterNome = (codEditora: Number) => {
    return this.servEditoras.getNomeEditora(codEditora);
  };
}
