import { Guid } from "guid-typescript";

export interface OutrasDespesasItensInterface {
    idItemOutraDespesa: Guid;
    descricaoItemOutraDespesa: string;
    ativo: boolean;
    criado: Date;
    criadoPor: string;
    alterado: DataCue;
    alteradoPor: string;
}
