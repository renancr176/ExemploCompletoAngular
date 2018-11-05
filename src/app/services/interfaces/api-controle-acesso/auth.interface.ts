import { ProcessoInterface } from "./processo.interface";

export interface AuthInterface {
    login: string; 
    nomeUsuario: string;
    email: string;
    chapa: string;
    token: string;
    msqErro: string;
    processos: Array<ProcessoInterface>;
}
