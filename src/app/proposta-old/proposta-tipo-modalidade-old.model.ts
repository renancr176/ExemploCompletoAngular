import { Guid } from "guid-typescript";

export class PropostaTipoModalidadeModelOld
{
  
    idModalidadeAtividade: Guid;
    idSubTipoModalidade :  Guid;

    constructor(idModalidadeAtividade: Guid, idSubTipoModalidade :  Guid){
        this.idModalidadeAtividade = idModalidadeAtividade;
        this.idSubTipoModalidade = idSubTipoModalidade;
    }
}