import { Contato } from "./contato";
import { Cidade } from "./cidade";

export class Pessoa {

  public idPessoa: number;
  public nome: string;
  public sobrenome: string;
  public cpf: string;
  public cep: string;
  public logadouro: string;
  public bairro: string;
  public complemento: string;
  public numero: string;
  public contatos: Contato[];
  public dataDeNascimento: string;
  public sexo: string;
  public cidade: Cidade;
}
