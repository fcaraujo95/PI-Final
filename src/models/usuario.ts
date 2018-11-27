import { Pessoa } from './pessoa';

export class Usuario extends Pessoa {

  public id: number;
  public login: string;
  public chave: string;
  public inativo: number;

  constructor() {
    super();
    this.id = 0;
    this.login = '';
    this.chave = '';
    this.inativo = 0;
  }

}
