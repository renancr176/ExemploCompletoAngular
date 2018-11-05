import { Guid } from "guid-typescript";

export interface CustoRecursosHumanosPessoalExternoOpcoesInterface {
    idOpcaoPessalExterno: Guid;
    descricaoOpcaoPessalExterno: string;
    ativo: boolean;
    criado: Date;
    criadoPor: string;
    alterado: Date;
    alteradoPor: string;
}
