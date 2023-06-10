import { Editora } from "../modelo/Editora";

export class ControleEditora {
  private editoras: Array<Editora> = [
    { codEditora: 123, nome: 'Editora A' },
    { codEditora: 2, nome: 'Editora B' },
    { codEditora: 3, nome: 'Editora C' },
  ];

  constructor() {}

  public getEditoras() {
    return this.editoras;
  }
  
  public getNomeEditora(codEditora: number) {
    if (!codEditora) return this.editoras[0].nome
    return this.editoras.filter(editora => editora.codEditora === codEditora)[0].nome;
  }
}