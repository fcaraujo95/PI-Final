import { Comprador } from './comprador';
import { Fornecedor } from './fornecedor';
import { CompraItem } from './compraItem';

export class Compra {
    id: Number;
    compraItens: CompraItem[];
    dataDaCompra: String;
    comprador: Comprador;
    fornecedor: Fornecedor;
    recebido: Boolean;

    constructor() {
        this.id = 0;
        this.compraItens = new Array<CompraItem>();
        this.dataDaCompra = '';
        this.comprador = new Comprador();
        this.fornecedor = new Fornecedor();
        this.recebido = false;
    }
}
