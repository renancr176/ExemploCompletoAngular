import { Guid } from "guid-typescript";

export interface TipoAreaTematicaInterface {
    idTipoAreaTematica: Guid;
    descricaoTipoAreaTematica: string;
    ativo: boolean;
    ordem: boolean;
    criado: Date;
    criadoPor: string;
    alterado: Date;
    alteradoPor: string;
}
