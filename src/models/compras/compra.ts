import { Comprador } from "./comprador";
import { Fornecedor } from "./fornecedor";
import { CompraItem } from "./compraItem";

export class Compra {
    id: Number;
    compraItens: CompraItem[];
    dataDaCompra: String;
    comprador: Comprador;
    fornecedor: Fornecedor;
    recebido: Boolean;
}
