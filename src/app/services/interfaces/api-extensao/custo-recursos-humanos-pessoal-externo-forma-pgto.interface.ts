import { Guid } from "guid-typescript";

export interface CustoRecursosHumanosPessoalExternoFormaPgtoInterface {
    idFormaPGTO: Guid;
    descricaoFormaPGTO: string;
    ativo: boolean;
    criado: Date;
    criadoPor: string;
    alterado: Date;
    alteradoPor: string;
}
