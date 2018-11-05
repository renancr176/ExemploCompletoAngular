import { Injectable } from '@angular/core';
import { Environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class BaseApiService {
  protected environment: Environment = new Environment(); 
  protected urlApi: string;

  constructor(protected http: Http) {
    switch(this.environment.hostType){
      case 'production':
        this.urlApi = 'https://api.baraodemaua.br/';
      break;
      case 'homologation':
        this.urlApi = 'https://api.baraodemaua.net/';
      break;
      /*case 'localhost':
      this.urlApi = 'https://localhost:5001/';
      break;*/
      default:
        this.urlApi = 'https://api.baraodemaua.teste/';
      break;
    }
  }

  protected handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}

