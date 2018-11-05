import { PessoaInterface } from "../../interfaces/api-extensao/pessoa.interface";
import { Guid } from "guid-typescript";

export class PessoaModel implements PessoaInterface{
    idPessoa: Guid;
    idTipoVinculo: Guid;
    nome: string;
    email: string;
    telefone: string;
    cpf: string;

    constructor(){}

    setPessoa(idPessoa: Guid, idTipoVinculo: Guid, nome: string, email: string, telefone: string, cpf: string){
        this.idPessoa = idPessoa;
        this.idTipoVinculo = idTipoVinculo;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.cpf = cpf;
    }
}
