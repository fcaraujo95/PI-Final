import { Estado } from "./estado";

export class Cidade {
  public id: number;
  public cidade: string;
  public sigla: string;
  public estado: Estado;

  constructor() {
    this.id = 0;
    this.cidade = '';
    this.sigla = '';
    this.estado = new Estado();
  }
}
