import { Guid } from "guid-typescript";

export interface CustoRecursosHumanosOpcoesInterface {
    idOpcao: Guid;
    codigoRM: number;
    descricaoOpcao: string;
    valor: number;
    inicioVigencia: Date;
    finalVigencia: Date;
    ativo: boolean;
    Criado: Date;
    criadoPor: string;
    alterado: Date;
    alteradoPor: string;
}
