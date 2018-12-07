import { Produto } from '../producao/produto';

export class CompraItem {
    id: Number;
    idCompra: Number;
    produto: Produto;
    quantidadeItem: Number;
    custoItem: Number;
    totalItem: Number ;

    constructor() {
        this.id = 0;
        this.idCompra = 0;
        this.produto = new Produto();
        this.quantidadeItem = 0;
        this.custoItem = 0;
        this.totalItem = 0;
    }
}
