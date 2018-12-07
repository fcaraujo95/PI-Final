export class Estoque {
    public id: number;
    public quantidade: number;
    public motivo: string;
    public dataEstoque: string;
    public idProduto: number;

    constructor() {
        this.id = 0;
        this.quantidade = 0;
        this.motivo = '';
        this.dataEstoque = '';
        this.idProduto = 0;
    }
}
