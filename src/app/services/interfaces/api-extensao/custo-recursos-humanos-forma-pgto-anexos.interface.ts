import { Guid } from "guid-typescript";

export interface CustoRecursosHumanosFormaPgtoAnexosInterface {
    idFormaPGTO: Guid;
    descricaoFormaPGTO: string;
    idTipoAnexo: Guid;
    descricaoTipoAnexo: string;
    sigla: string;
    Obrigatorio: boolean;
    ativo: boolean;
    ordem: number;
}
