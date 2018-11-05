import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

//#region Services
import { ApiExtensaoService } from '../services/api-extensao.service';
import { PropostaListaInterface } from '../services/interfaces/api-extensao/proposta-lista.interface';
//#endregion

//#region Interfaces
//#endregion

//#region Models
import { GetPropostaModel } from '../services/models/api-extensao/get-proposta.model';
//#endregion

@Component({
  selector: 'app-proposta',
  templateUrl: './proposta.component.html',
  styleUrls: ['./proposta.component.scss'],
  providers: [
    ApiExtensaoService,
    AuthGuard
  ]
})
export class PropostaComponent implements OnInit {
  public propostas: Array<PropostaListaInterface> = new Array<PropostaListaInterface>();
  private getPropostaModel: GetPropostaModel = new GetPropostaModel();

  constructor(private router: Router, private authGuard: AuthGuard, private apiExtensaoService: ApiExtensaoService) {
    this.getPropostaModel.aliasUsuario = authGuard.auth.login;
  }

  ngOnInit() {
    this.getPropostasLista();
  }

  onClickEdit(numeroProposta: number): void{
    this.router.navigate(['proposta/formulario', {numeroProposta: numeroProposta}]);
  }

  onClickDelete(numeroProposta: number): void{
    if(confirm("Tem certeza que deseja excluir esta proposta?")){
      this.getPropostaModel.numeroProposta = numeroProposta;
      //this.deleteProposta(this.getPropostaModel);
    }
  }

  getPropostasLista(): void {
    this.apiExtensaoService.getPropostasLista(this.authGuard.auth.login)
    .subscribe(
      response => {
        this.propostas = response;
      },
      error => console.log('Error :: ' + error)
    )
    .unsubscribe();
  }

  deleteProposta(getPropostaModel: GetPropostaModel): void{
    /*
    this.apiExtensaoService.deleteProposta(this.getPropostaModel)
    .subscribe(
      response => {
        if(response.success && response.data.success){
          this.getPropostasLista();
        }else if(response.success){
          alert(response.data.message);
        }else{
          alert('Erro ao contactar a API, o serviço pode estar temporariamente fora de serviço.');
        }
      },
      error => console.log('Error :: ' + error)
    )
    .unsubscribe();
    */
  }

  trackByProposta(index, item){
    return item.numeroProposta;
  }
}
