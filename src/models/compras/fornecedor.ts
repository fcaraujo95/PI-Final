import { Empresa } from "../empresa";

export class Fornecedor extends Empresa {
    id: number;
    formatoJuridico: string;
    regimeTributario: string;
    inativo: number;

    constructor() {
        super();
        this.id = 0;
        this.formatoJuridico = '';
        this.regimeTributario = '';
        this.inativo = 0;
    }
}
