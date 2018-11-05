import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthModel } from '../services/models/api-controle-acesso/auth.model';

@Injectable()
export class AuthGuard implements CanActivate {
  public auth: AuthModel;

  constructor(private router : Router){
    this.auth = <AuthModel> JSON.parse(localStorage.getItem('auth'));
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      //console.log(next.routeConfig.path);
      //console.log(this.auth);
      if(localStorage.getItem('auth') != null 
      &&  (
            Object.keys(next.routeConfig).filter(x => x == 'data').length == 0
          || next.routeConfig.data == null
          || Object.keys(next.routeConfig.data).filter(x => x == 'accessLevel').length == 0 
          || next.routeConfig.data['accessLevel'] == 'free'
          )
      ){
        return true;
      }else if(
        localStorage.getItem('auth') != null
        && Object.keys(next.routeConfig).filter(x => x == 'data').length == 1
        && next.routeConfig.data != null
        && Object.keys(next.routeConfig.data).filter(x => x == 'accessLevel').length == 1
        && next.routeConfig.data['accessLevel'] == 'restrict'
        && this.auth.processos.filter(x => x.action == next.routeConfig.path).length > 0
      ){
        console.log('ok');
        return true;
      }
      
      if(localStorage.getItem('auth') != null){
        this.router.navigateByUrl('');
      }else{
        this.router.navigateByUrl('/auth/login');
      }

      return false;
  }
}
