import { Guid } from "guid-typescript";

export interface TipoAreaConhecimentoSubAreasInterface {
    idTipoAreaConhecimentoSubArea: Guid;
    descricaoTipoAreaConhecimentoSubArea: string;
    ativo: boolean;
    ordem: number;
    criado: Date;
    criadoPor: string;
    alterado: Date;
    alteradoPor: string;
}
