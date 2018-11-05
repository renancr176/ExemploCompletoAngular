import { Guid } from "guid-typescript";

export interface ReceitaItensInterface {
    idItemReceita: Guid;
    descricaoItem: string;
    ativo: boolean;
    ordem: number;
    criado: Date;
    criadoPor: string;
    alterado: DataCue;
    alteradoPor: string;
}
