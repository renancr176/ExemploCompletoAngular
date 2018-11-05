import { Guid } from "guid-typescript";

export interface CustoRecursosHumanosOpcoesValorFixoEspecialInterface {
    idOpcaoPessoalInterno: Guid;
    descricaoOpcaoPessoalInterno: string;
    ativo: boolean;
    criado: Date;
    criadoPor: string;
    alterado: DataCue;
    alteradoPor: string;
}
