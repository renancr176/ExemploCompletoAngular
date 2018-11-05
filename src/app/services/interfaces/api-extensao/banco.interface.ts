import { Guid } from "guid-typescript";

export interface BancoInterface {
    idBanco: Guid;
    nomeBanco: string;
    codigoBanco: number;
    ativo: boolean;
}
