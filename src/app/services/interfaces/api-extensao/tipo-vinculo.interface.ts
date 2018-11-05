import { Guid } from "guid-typescript";

export interface TipoVinculoInterface {
    idTipoVinculo: Guid;
    descricaoTipoVinculo: string;
    ativo: boolean;
    criado: Date;
    criadoPor: string;
    alterado: Date;
    alteradoPor: string;
}
