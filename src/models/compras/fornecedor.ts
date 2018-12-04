import { Empresa } from "../empresa";

export class Fornecedor extends Empresa {
    id: number;
    formatoJuridico: string;
    regimeTributario: string;
    inativo: number;
}
