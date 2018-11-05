import { AuthInterface } from "../../interfaces/api-controle-acesso/auth.interface";
import { ProcessoInterface } from "../../interfaces/api-controle-acesso/processo.interface";

export class AuthModel implements AuthInterface{
    login: string;
    nomeUsuario: string;
    email: string;
    chapa: string;
    token: string;
    msqErro: string;
    processos: Array<ProcessoInterface>;

}
