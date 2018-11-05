import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiControleAcessoService } from '../../services/api-controle-acesso.service';

import { AuthPostModel } from '../../services/models/api-controle-acesso/auth-post.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    ApiControleAcessoService
  ]
})
export class LoginComponent implements OnInit {
  public authPostModel: AuthPostModel;
  public onSubmit: boolean = false;

  constructor(private router : Router, private apiControleAcessoService: ApiControleAcessoService) {
    this.authPostModel = new AuthPostModel();
    this.authPostModel.login = '';
    this.authPostModel.senha = '';
  }

  ngOnInit() {
  }

  inputUsuario(login: Event): void{
    this.authPostModel.login = (<HTMLInputElement> login.target).value.replace(/@.*/,'');
  }

  inputSenha(senha: Event): void{
    this.authPostModel.senha = (<HTMLInputElement> senha.target).value;
  }

  submit(): void{
    this.onSubmit = true;
    this.apiControleAcessoService.auth(this.authPostModel)
      .subscribe(
        response => {
          if(response.token != '' && response.token != null){
            localStorage.setItem('auth', JSON.stringify(response));
            this.router.navigateByUrl('');
          }else{
            localStorage.removeItem('auth');
            alert("Usuário ou senha incorreta.");
          }
          this.onSubmit = false;
        },
        error => {
          localStorage.removeItem('auth');
          console.log('Error :: ' + error);
          this.onSubmit = false;
        }
    );
  }
}
