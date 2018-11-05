import { AuthPostInterface } from "../../interfaces/api-controle-acesso/auth-post.interface";
import { environment } from "../../../../environments/environment";

export class AuthPostModel implements AuthPostInterface{
    public idSistema: number;
    public login: string;
    public senha: string;
    
    constructor(){
        this.idSistema = environment.idSistema;
    }
}