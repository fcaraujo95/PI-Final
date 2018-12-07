import { Pessoa } from "../pessoa";

export class Comprador extends Pessoa {
    id: number;
    limiteDeCredito: number;
    inativo: number;

    constructor() {
        super();
        this.id = 0;
        this.limiteDeCredito = 0;
        this.inativo = 0;
    }
}

