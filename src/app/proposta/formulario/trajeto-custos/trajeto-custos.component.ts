import { Component, OnInit, Input, Output, OnDestroy, EventEmitter } from '@angular/core';

import { TrajetoCustosBaseData } from './trajeto-custos-base-data';

//#region Services
import { ApiExtensaoService } from '../../../services/api-extensao.service';
//#endregion

//#region Interfaces
import { ConfiguracaoGeralInterface } from '../../../services/interfaces/api-extensao/configuracao-geral.interface';
//#endregion

//#region Models
import { PropostaModel } from '../../../services/models/api-extensao/proposta.model';
//#endregion

@Component({
  selector: 'app-trajeto-custos',
  templateUrl: './trajeto-custos.component.html',
  styleUrls: ['./trajeto-custos.component.scss'],
  providers: [
    ApiExtensaoService
  ]
})
export class TrajetoCustosComponent extends TrajetoCustosBaseData implements OnInit, OnDestroy {
  @Input() public configuracaoGera: ConfiguracaoGeralInterface;
  @Input() public propostaModel: PropostaModel;
  @Output() public propostaModelFeedBack = new EventEmitter();
  @Output() public selectTab = new EventEmitter();

  constructor(protected apiExtensaoService: ApiExtensaoService) {
    super(apiExtensaoService);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.eventEmitterHandler();
  }

  eventEmitterHandler(): void{
    this.propostaModelFeedBack.emit(this.propostaModel);
  }

  previewTab(): void{
    this.selectTab.emit('peridoCronograma');
  }
}
