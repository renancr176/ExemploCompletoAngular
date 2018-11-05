import { Guid } from "guid-typescript";

export interface CronogramaInterface {
    idCronograma: Guid;
    data: Date;
    horarioInicio: Date;
    horarioTermino: Date;
    descricao: string;
    nomeResponsavel: string;
    local: string;
}
