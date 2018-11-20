import { Pessoa } from "./pessoa";

export class Usuario extends Pessoa {

  public id: number;
  public login: string;
  public chave: string;
  public inativo: number;

}
