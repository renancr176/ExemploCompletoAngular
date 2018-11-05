import { Guid } from "guid-typescript";

export interface DespesasViagemItensInterface {
    idItemDespesaViagem: Guid;
    descricaoItemDespesaViagem: string;
    ativo: boolean;
    criado: Date;
    criadoPor: string;
    alterado: Date;
    alteradoPor: string;
}
