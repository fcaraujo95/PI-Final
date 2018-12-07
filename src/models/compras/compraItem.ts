import { Produto } from '../producao/produto';

export class CompraItem {
    id: number;
    idCompra: number;
    produto: Produto;
    quantidadeItem: number;
    custoItem: number;
    totalItem: number ;

    constructor() {
        this.id = 0;
        this.idCompra = 0;
        this.produto = new Produto();
        this.quantidadeItem = 0;
        this.custoItem = 0;
        this.totalItem = 0;
    }
}
