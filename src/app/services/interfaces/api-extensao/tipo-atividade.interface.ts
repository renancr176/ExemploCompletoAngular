import { Guid } from "guid-typescript";

export interface TipoAtividadeInterface {
    idTipoAtividade: Guid;
    descricaoTipoAtividade: string;
    ativo: boolean;
    ordem: number;
    criado: Date;
    criadoPor: string;
    alterado: Date;
    alteradoPor: string;
}
