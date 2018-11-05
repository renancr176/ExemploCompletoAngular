import { TipoEquipePessoaInterface } from "../../interfaces/api-extensao/tipo-equipe-pessoa.interface";
import { PessoaInterface } from "../../interfaces/api-extensao/pessoa.interface";
import { Guid } from "guid-typescript";

export class TipoEquipePessoaModel implements TipoEquipePessoaInterface{
    idTipoEquipe: Guid;
    pessoas: Array<PessoaInterface>;

    constructor(idTipoEquipe: Guid, pessoas: Array<PessoaInterface>){
        this.idTipoEquipe = idTipoEquipe;
        this.pessoas = pessoas;
    }
}
