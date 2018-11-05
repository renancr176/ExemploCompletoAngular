import { Guid } from "guid-typescript";

export interface TipoResponsabilidadeSocialInterface {
    idTipoResponsabilidadeSocial: Guid;
    descricaoTipoResponsabilidadeSocial: string;
    resumo: string;
    ativo: boolean;
    ordem: number;
    criado: Date;
    criadoPor: string;
    alterado: Date;
    alteradoPor: string;
}
