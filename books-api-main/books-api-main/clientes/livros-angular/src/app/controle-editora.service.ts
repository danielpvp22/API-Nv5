import { Injectable } from '@angular/core';
import { Editora } from '../app/editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    { codEditora: 123, nome: 'Editora A' },
    { codEditora: 2, nome: 'Editora B' },
    { codEditora: 3, nome: 'Editora C' },
  ];

  constructor() {}

  public getEditoras() {
    return this.editoras;
  }
  
  public getNomeEditora(codEditora: Number) {
    if (!codEditora) return this.editoras[0].nome
    return this.editoras.filter(editora => editora.codEditora == codEditora)[0].nome;
  }
}
