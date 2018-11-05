import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Functions } from '../../../shared/functions';
import { Validations } from '../../../shared/validations';

import { PeriodoCronogramaBaseData } from './periodo-cronograma-base-data';

//#region Services
import { ApiExtensaoService } from "../../../services/api-extensao.service";
//#endregion

//#region Interfaces
import { ConfiguracaoGeralInterface } from '../../../services/interfaces/api-extensao/configuracao-geral.interface';
import { CronogramaInterface } from '../../../services/interfaces/api-extensao/cronograma.interface';
//#endregion

//#region Models
import { PropostaModel } from '../../../services/models/api-extensao/proposta.model';
//#endregion


@Component({
  selector: 'app-periodo-cronograma',
  templateUrl: './periodo-cronograma.component.html',
  styleUrls: ['./periodo-cronograma.component.scss'],
  providers: [
    ApiExtensaoService,
    Functions,
    Validations
  ]
})
export class PeriodoCronogramaComponent extends PeriodoCronogramaBaseData implements OnInit, OnDestroy {
  @Input() public configuracaoGera: ConfiguracaoGeralInterface;
  @Input() public propostaModel: PropostaModel;
  @Output() public propostaModelFeedBack = new EventEmitter();
  @Output() public selectTab = new EventEmitter(); 

  public habilitaCronogramaTipoAtv: Array<Guid> = new Array<Guid>();
  public idTipoVinculo: Guid;
  public modalBtnEdit: boolean = false;
  public cronograma: Array<CronogramaInterface>;

  public maskData: any = { mask: [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/], guid: true };
  public maskHora: any = { mask: [/[0-9]/, /[0-9]/, ':', /[0-9]/, /[0-9]/], guid: true };

  constructor(protected apiExtensaoService: ApiExtensaoService, protected functions: Functions, protected validations: Validations) {
    super(apiExtensaoService);
    this.habilitaCronogramaTipoAtv.push(Guid.parse('8bcbef8f-dc1a-479c-b166-cb86a82cf279'));//Curso
    this.habilitaCronogramaTipoAtv.push(Guid.parse('0f83c978-dba0-4c98-b2bd-10ab7e5971f2'));//Evento
    this.cronograma = Array<CronogramaInterface>();
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
    this.selectTab.emit('envolvidos');
  }

  nextTab(): void{
    this.selectTab.emit('trajetoCustos');
  }

  //#region Buttons Event
  btnOpenModal(): void{
    document.querySelector('#modalDefault').classList.add('md-show');
  }

  btnCloseModal(): void{
    document.querySelector('#modalDefault').classList.remove('md-show');
    //this.resetModal();
  }

  btnAdd(): void{

  }

  btnEdit(): void{

  }
  //#endregion

  //#region Ativações componente
  habilitaCronograma(): boolean{
    if(this.propostaModel.idTipoAtividade != null 
    && this.habilitaCronogramaTipoAtv.length > 0
    && this.habilitaCronogramaTipoAtv.filter(id => id.equals(this.propostaModel.idTipoAtividade)).length > 0
    ){
      return true;
    }
    return false;
  }
  //#endregion

  //#region Default Values
  getDataInicio(): string{
    let dataStr: string = '';
    if(this.propostaModel.dataInicio != null){
      let month = (this.propostaModel.dataInicio.getMonth() + 1);
      dataStr +=  this.propostaModel.dataInicio.getFullYear() +
                  '-' +
                  ((month < 10)? '0'+month:month) +
                  '-' +
                  ((this.propostaModel.dataInicio.getDate() < 10)? '0'+this.propostaModel.dataInicio.getDate():this.propostaModel.dataInicio.getDate());
    }
    return dataStr;
  }

  getHoraInicio(): string{
    let horaStr: string = '';
    if(this.propostaModel.dataInicio != null){
      horaStr += ((this.propostaModel.dataInicio.getHours() < 10)? '0'+this.propostaModel.dataInicio.getHours():this.propostaModel.dataInicio.getHours()) +
                  ':' +
                  ((this.propostaModel.dataInicio.getMinutes() < 10)? '0'+this.propostaModel.dataInicio.getMinutes():this.propostaModel.dataInicio.getMinutes());

    }
    return horaStr;
  }

  getDataTermino(): string{
    let dataStr: string = '';
    if(this.propostaModel.dataTermino != null){
      let month = (this.propostaModel.dataTermino.getMonth() + 1);
      dataStr +=  this.propostaModel.dataTermino.getFullYear() +
                  '-' +
                  ((month < 10)? '0'+month:month) +
                  '-' +
                  ((this.propostaModel.dataTermino.getDate() < 10)? '0'+this.propostaModel.dataTermino.getDate():this.propostaModel.dataTermino.getDate());
    }
    return dataStr;
  }

  getHoraTermino(): string{
    let horaStr: string = '';
    if(this.propostaModel.dataTermino != null){
      horaStr += ((this.propostaModel.dataTermino.getHours() < 10)? '0'+this.propostaModel.dataTermino.getHours():this.propostaModel.dataTermino.getHours()) +
                  ':' +
                  ((this.propostaModel.dataTermino.getMinutes() < 10)? '0'+this.propostaModel.dataTermino.getMinutes():this.propostaModel.dataTermino.getMinutes());

    }
    return horaStr;
  }

  checkedTipoVinculo(idTipoVinculo: Guid): boolean{
    if(this.idTipoVinculo == idTipoVinculo){
      return true;
    }
    return false;
  }
  //#endregion

  //#region Input Events
  inputDataInicio(event: Event): void{
    let val = (<HTMLInputElement> event.target).value;
    if(val != '' && this.validations.data(val)){
      let dataStr: Array<string> = val.split('-');
      let dataInicio: Date = new Date(parseInt(dataStr[0]), (parseInt(dataStr[1])-1), parseInt(dataStr[2]));
      if(this.propostaModel.dataInicio == null){
        this.propostaModel.dataInicio = dataInicio;
      }else{
        let horaInicio: Date = this.propostaModel.dataInicio;
        dataInicio.setHours(horaInicio.getHours());
        dataInicio.setMinutes(horaInicio.getMinutes());
        this.propostaModel.dataInicio = dataInicio;
      }
      this.eventEmitterHandler();
    }else if(this.propostaModel.dataInicio != null){
      this.propostaModel.dataInicio = null;
      if(val != '' && !this.validations.data(val)){
        alert('Data inválida.');
      }
    }
  }
  
  inputHoraInicio(event: Event): void{
    let val = (<HTMLInputElement> event.target).value;
    if(val != '' && this.validations.horario(val)){
      let horaStr: Array<string> = val.split(':');
      if(this.propostaModel.dataInicio == null){
        let data: Date = new Date();
        data.setHours(parseInt(horaStr[0]));
        data.setMinutes(parseInt(horaStr[1]));
        this.propostaModel.dataInicio = data;
      }else{
        this.propostaModel.dataInicio.setHours(parseInt(horaStr[0]));
        this.propostaModel.dataInicio.setMinutes(parseInt(horaStr[1]));
      }
      this.eventEmitterHandler();
    }else if(val != '' && !this.validations.horario(val)){
      alert('Horário inválido.');
      (<HTMLInputElement> event.target).value = '';
    }
  }

  inputDataTermino(event: Event): void{
    let val = (<HTMLInputElement> event.target).value;
    if(val != '' && this.validations.data(val)){
      let dataStr: Array<string> = val.split('-');
      let dataTermino: Date = new Date(parseInt(dataStr[0]), (parseInt(dataStr[1])-1), parseInt(dataStr[2]));
      if(this.propostaModel.dataTermino == null){
        this.propostaModel.dataTermino = dataTermino;
      }else{
        let horaInicio: Date = this.propostaModel.dataTermino;
        dataTermino.setHours(horaInicio.getHours());
        dataTermino.setMinutes(horaInicio.getMinutes());
        this.propostaModel.dataTermino = dataTermino;
      }
      this.eventEmitterHandler();
    }else if(this.propostaModel.dataTermino != null){
      this.propostaModel.dataTermino = null;
      if(val != '' && !this.validations.data(val)){
        alert('Data inválida.');
      }
    }
  }

  inputHoraTermino(event: Event): void{
    let val = (<HTMLInputElement> event.target).value;
    if(val != '' && this.validations.horario(val)){
      let horaStr: Array<string> = val.split(':');
      if(this.propostaModel.dataTermino == null){
        let data: Date = new Date();
        data.setHours(parseInt(horaStr[0]));
        data.setMinutes(parseInt(horaStr[1]));
        this.propostaModel.dataTermino = data;
      }else{
        this.propostaModel.dataTermino.setHours(parseInt(horaStr[0]));
        this.propostaModel.dataTermino.setMinutes(parseInt(horaStr[1]));
      }
      this.eventEmitterHandler();
    }else if(val != '' && !this.validations.horario(val)){
      alert('Horário inválido.');
      (<HTMLInputElement> event.target).value = '';
    }
  }

  radioTipoVinculo(idTipoVinculo: Guid): void{
    this.idTipoVinculo = idTipoVinculo;
  }
  //#endregion
}
