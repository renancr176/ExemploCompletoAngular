import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthGuard } from '../../auth/auth.guard';

import { FormularioBaseData } from './formulario-base-data';

//#region Flat-Able Components
import { fadeInOutTranslate } from '../../shared/elements/animation';
//#endregion

//#region Services
import { ApiExtensaoService } from '../../services/api-extensao.service';
//#endregion

//#region Interfaces
//#endregion

//#region Models
import { GetPropostaModel } from '../../services/models/api-extensao/get-proposta.model';
import { PropostaModel } from '../../services/models/api-extensao/proposta.model';
//#endregion

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  animations: [fadeInOutTranslate],
  providers: [
    ApiExtensaoService,
    AuthGuard
  ]
})
export class FormularioComponent extends FormularioBaseData implements OnInit {
  private getPropostaModel: GetPropostaModel = new GetPropostaModel();
  public propostaModel: PropostaModel;
  public selectedTab: string = 'basico';

  constructor(private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private authGuard: AuthGuard, 
    protected apiExtensaoService: ApiExtensaoService) {
    super(apiExtensaoService);
    this.getPropostaModel.aliasUsuario = this.authGuard.auth.login;
    if(Object.keys(this.activatedRoute.snapshot.params).filter(x => x == 'numeroProposta').length > 0){
      this.getPropostaModel.numeroProposta = +this.activatedRoute.snapshot.params.numeroProposta;
      this.apiExtensaoService.getProposta(this.getPropostaModel)
      .subscribe(
        response => {
          this.propostaModel = response;
          if(this.propostaModel.numeroProposta == null){
            alert('Proposta não encontrada.');
            this.router.navigate(['proposta']);
          }
        },
        error => {
          console.log('Error :: ' + error);
          alert('Proposta não encontrada.');
          this.router.navigate(['proposta']);
        }
      )
      .unsubscribe();
    }else{
      this.propostaModel = new PropostaModel();
    }
  }

  ngOnInit() {
  }

  propostaModelFeedBack(propostaModel: PropostaModel): void{
    this.propostaModel = propostaModel;
    console.log(this.propostaModel);
  }

  selectTab(tabId: string): void{
    this.selectedTab = tabId;
  }

  calcDataEntregaProposta(): Date{
    let dataEntregaProposta: Date = new Date();
    if(this.configuracaoGera != null && this.configuracaoGera.diasPrazoEntragaProposta != null){
      dataEntregaProposta.setDate(dataEntregaProposta.getDate() + this.configuracaoGera.diasPrazoEntragaProposta);
    }
    return dataEntregaProposta;
  }
}

