import { Estoque } from './estoque';
import { Custo } from './custo';
import { Preco } from './preco';

export class Produto {
    public id: number;
    public nome: string;
    public descricao: string;
    public ean: string;
    public marca: string;
    public peso: number;
    public altura: number;
    public largura: number;
    public comprimento: number;
    public preco: Preco;
    public custo: Custo;
    public estoque: Estoque;
    public inativo: number;

    constructor() {
      this.id = 0;
      this.nome = '';
      this.descricao = '';
      this.ean = '';
      this.marca = '';
      this.peso = 0;
      this.altura = 0;
      this.largura = 0;
      this.comprimento = 0;
      this.estoque = new Estoque();
      this.inativo = 0;
      this.preco = new Preco();
      this.custo = new Custo();
    }
}
