import { Contato } from "./contato";
import { Cidade } from "./cidade";

export class Empresa {
    public idEmpresa: number;
    public nomeFantasia: string;
    public razaoSocial: string;
    public cnpj: string;
    public dataDeCriacao: string;

    public cep: string;
    public logadouro: string;
    public bairro: string;
    public complemento: string;
    public numero: string;
    public contatos: Contato[];
    public cidade: Cidade;
}