import { Guid } from "guid-typescript";

export interface TipoInscricaoInterface {
    idTipoInscricao: Guid;
    descricao: string;
    ativo: boolean;
    usuarioCriacao: string;
    dataCriacao: Date;
    usuarioAlteracao: string;
    dataAlteracao: Date;
}
