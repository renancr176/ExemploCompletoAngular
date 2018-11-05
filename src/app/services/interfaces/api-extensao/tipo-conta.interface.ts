import { Guid } from "guid-typescript";

export interface TipoContaInterface {
    idTipoConta: Guid;
    tipoConta: string;
    ativo: boolean;
}
