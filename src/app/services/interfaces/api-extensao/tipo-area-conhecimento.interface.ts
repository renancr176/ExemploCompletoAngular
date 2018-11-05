import { Guid } from "guid-typescript";

export interface TipoAreaConhecimentoInterface {
    idTipoAreaConhecimento: Guid;
    descricaoTipoAreaConhecimento: string;
    ativo: boolean;
    ordem: number;
    criado: Date;
    criadoPor: string;
    alterado: Date;
    alteradoPor: string;
}
