import { Pessoa } from "../pessoa";

export class Comprador extends Pessoa {
    id: number;
    limiteDeCredito: number;
    inativo: number;
}

