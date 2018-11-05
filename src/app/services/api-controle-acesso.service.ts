import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BaseApiService } from './base-api.service';
import 'rxjs/Rx';

//Interfaces
import { AuthInterface } from './interfaces/api-controle-acesso/auth.interface';

//Models
import { AuthPostModel } from './models/api-controle-acesso/auth-post.model';

@Injectable()
export class ApiControleAcessoService extends BaseApiService{   
  private apiSubDomain: string = 'http://api.baraodemaua.br/controleacesso/api/';

  constructor(protected http: Http) {
    super(http);
    this.urlApi = this.apiSubDomain;
  }

  auth(authPostModel: AuthPostModel): Observable<AuthInterface> {
    return this.http
        .post(this.urlApi + 'UsuarioProcesso/AutenticacaoUsuarioGetProcesso/', authPostModel)
        .map((response: Response) => {
          return <AuthInterface>response.json();
        })
        .catch(this.handleError);
  }
}
