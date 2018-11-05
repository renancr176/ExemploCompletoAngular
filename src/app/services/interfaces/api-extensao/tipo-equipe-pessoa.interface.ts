import { PessoaInterface } from "./pessoa.interface";
import { Guid } from "guid-typescript";

export interface TipoEquipePessoaInterface {
    idTipoEquipe: Guid;
    pessoas: Array<PessoaInterface>;
}
