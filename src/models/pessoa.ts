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

  constructor() {
    this.idPessoa = 0;
    this.nome = '';
    this.sobrenome = '';
    this.cpf = '';
    this.cep = '';
    this.logadouro = '';
    this.bairro = '';
    this.complemento = '';
    this.numero = '';
    this.contatos = [];
    this.dataDeNascimento = '';
    this.sexo = '';
    this.cidade = new Cidade();
  }
}
