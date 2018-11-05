import { Guid } from "guid-typescript";
import {PropostaTipoModalidadeModelOld } from "./proposta-tipo-modalidade-old.model";

export class PropostaModelOld
{
    titulo: string;
    tipoModalidade: Array<Guid> = new Array<Guid>();
    haveraApresentacao: boolean;
    termoResponsabilidadeSocial: boolean;
    subTipoModalidade: PropostaTipoModalidadeModelOld;
}