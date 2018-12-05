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
      this.preco = new Preco();
      this.custo = new Custo();
    }
}
