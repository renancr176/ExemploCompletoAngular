import { Guid } from "guid-typescript";

export interface PessoaInterface {
    idPessoa: Guid;
    idTipoVinculo: Guid;
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
}
