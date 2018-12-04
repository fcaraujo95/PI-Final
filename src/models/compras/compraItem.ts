import { Produto } from "../producao/produto";

export class CompraItem {
    id: Number;
    idCompra: Number;
    produto: Produto;
    quantidadeItem: Number;
    custoItem: Number;
    totalItem: Number ;
}
