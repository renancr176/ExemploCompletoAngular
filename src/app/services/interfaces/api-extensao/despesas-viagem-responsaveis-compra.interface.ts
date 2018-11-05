import { Guid } from "guid-typescript";

export interface DespesasViagemResponsaveisCompraInterface {
    idResponsavelCompra: Guid;
    descricaoResponsavelCompra: string;
    ativo: boolean;
    criado: Date;
    criadoPor: string;
    alterado: Date;
    alteradoPor: string;
}
