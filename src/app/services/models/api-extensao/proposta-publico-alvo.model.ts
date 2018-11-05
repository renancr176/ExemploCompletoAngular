import { Guid } from "guid-typescript";
import { PropostaPublicoAlvoInterface } from "../../interfaces/api-extensao/proposta-publico-alvo.interface";

export class PropostaPublicoAlvoModel implements PropostaPublicoAlvoInterface{
    idTipoPublicoAlvo: Guid;
    especificacao: string;
}
