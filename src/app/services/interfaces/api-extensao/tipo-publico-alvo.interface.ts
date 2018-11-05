import { Guid } from "guid-typescript";

export interface TipoPublicoAlvoInterface {
    idTipoPublicoAlvo: Guid;
    descricaoTipoPublicoAlvo: string;
    requerEspecificacao: string;
    ativo: boolean;
    ordem: number;
    criado: Date;
    criadoPor: string;
    alterado: Date;
    alteradoPor: string;
}
