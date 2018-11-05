import { Guid } from "guid-typescript";

export interface TipoEquipeInterface {
    idTipoEquipe: Guid;
    descricaoTipoEquipe: string;
    ativo: boolean;
    ordem: number;
    criado: Date;
    criadoPor: string;
    alterado: Date;
    alteradoPor: string;
}
