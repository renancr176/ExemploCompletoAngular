import { Guid } from "guid-typescript";

export interface DespesasMarketingItensInterface {
    idItemDespesaMarketing: Guid;
    descricaoItemDespesaMarketing: string;
    ativo: boolean;
    criado: Date;
    criadoPor: string;
    alterado: Date;
    alteradoPor: string;
}
