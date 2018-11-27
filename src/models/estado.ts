import { Pais } from "./pais";

export class Estado {

  public id: number;
  public estado: string;
  public sigla: string;
  public pais: Pais;

  constructor() {
    this.id = 0;
    this.estado = '';
    this.sigla = '';
    this.pais = new Pais();
  }
}
