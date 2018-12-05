import { Preco } from "./preco";
import { Estoque } from "./estoque";
import { Custo } from "./custo";

export class Produto {
  id: number;
  nome: string;
  descricao: string;
  ean: string;
  marca: string;
  peso: number;
  largura: number;
  altura: number;
  comprimento: number;
  precos: Array<Preco>;
  custos: Array<Custo>;
  estoque: Array<Estoque>
  inativo: number;
}
