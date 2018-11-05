import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { IOption } from 'ng-select';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Guid } from 'guid-typescript';

import { BasicoBaseData } from './basico-base-data';

//#region Services
import { ApiExtensaoService } from '../../../services/api-extensao.service';
//#endregion

//#region Interfaces
import { ConfiguracaoGeralInterface } from '../../../services/interfaces/api-extensao/configuracao-geral.interface';
import { CursoInterface } from '../../../services/interfaces/api-extensao/curso.interface';
import { TipoPublicoAlvoInterface } from '../../../services/interfaces/api-extensao/tipo-publico-alvo.interface';
//#endregion

//#region Models
import { PropostaModel } from '../../../services/models/api-extensao/proposta.model';
import { PropostaPublicoAlvoModel } from '../../../services/models/api-extensao/proposta-publico-alvo.model';
//#endregion

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styleUrls: ['./basico.component.scss'],
  providers: [
    ApiExtensaoService
  ]
})
export class BasicoComponent extends BasicoBaseData implements OnInit, OnDestroy{
  @Input() public configuracaoGera: ConfiguracaoGeralInterface;
  @Input() public propostaModel: PropostaModel;
  @Output() public propostaModelFeedBack = new EventEmitter();
  @Output() public selectTab = new EventEmitter();

  public indexSubAreaConhecimento: Array<number>;
  public selectedTipoAreaTematica: Array<string> = new Array<string>();
  public selectedCurso: Array<string> = new Array<string>();
  public selectedTipoPublicoAlvo: Array<string> = new Array<string>();
  public tipoPubliAlvoRequerEspecificacao: Array<TipoPublicoAlvoInterface> = new Array<TipoPublicoAlvoInterface>();

  constructor(protected apiExtensaoService: ApiExtensaoService) {
    super(apiExtensaoService);
    this.indexSubAreaConhecimento = [1,2,3];
    this.getTipoCurso();
  }

  ngOnInit() {
    if(this.propostaModel.idTipoAreaTematica != null && this.propostaModel.idTipoAreaTematica.length > 0){
      this.selectedTipoAreaTematica = this.propostaModel.idTipoAreaTematica.map(val => val.toString());
    }
    if(this.propostaModel.codigoCurso != null && this.propostaModel.codigoCurso.length > 0){
      this.selectedCurso = this.propostaModel.codigoCurso.map(val => val.toString());
    }
    if(this.propostaModel.publicoAlvo != null && this.propostaModel.publicoAlvo.length > 0){
      this. selectedTipoPublicoAlvo = this.propostaModel.publicoAlvo.map(obj => obj.idTipoPublicoAlvo.toString());
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.eventEmitterHandler();
  }

  eventEmitterHandler(): void{
    this.propostaModelFeedBack.emit(this.propostaModel);
  }

  nextTab(): void{
    this.selectTab.emit('envolvidos');
  }

  getTipoCurso(): void{
    this.subscriptions.add(
        this.apiExtensaoService.getTipoCurso()
        .subscribe(
            response => {
                this.tipoCurso = response;
                if(this.propostaModel != null && this.propostaModel.idTipoCurso != null && this.tipoCurso != null){
                  this.getCursosPorTipos(this.tipoCurso.find(tc => this.propostaModel.idTipoCurso.equals(tc.idTipoCurso)).codigoTipoCurso.toString());
                }
            },
            error => console.log('Error :: ' + error)
        )
    );
  }

  updateTipoPubliAlvoRequerEspecificacao(): void{
    this.tipoPubliAlvoRequerEspecificacao = new Array<TipoPublicoAlvoInterface>();
    if(this.tipoPublicoAlvo != null && this.propostaModel.publicoAlvo != null){
      for(let item of this.tipoPublicoAlvo){
        if(item.requerEspecificacao && this.propostaModel.publicoAlvo.filter(x => x.idTipoPublicoAlvo.equals(item.idTipoPublicoAlvo)).length > 0){
          this.tipoPubliAlvoRequerEspecificacao.push(item);
        }
      }
    }
  }

  habilitaCientePrograma(): boolean{
    if(this.propostaModel.idTipoAtividade != null 
    && Guid.parse('06b571bd-4d83-408c-ace4-3e9fae3c9847').equals(this.propostaModel.idTipoAtividade)
    ){
      return true;
    }
    return false;
  }

  habilitaCienteProjeto(): boolean{
    if(this.propostaModel.idTipoAtividade != null 
    && Guid.parse('e3851ff1-350c-4145-86b9-7c2e2a38653c').equals(this.propostaModel.idTipoAtividade)
    ){
      return true;
    }
    return false;
  }

  //#region SetSelected
  setSelectedTipoResponsabilidadeSocial(id: Guid): boolean{
    if(this.propostaModel.idTipoResponsabilidadeSocial != null 
    && this.propostaModel.idTipoResponsabilidadeSocial.equals(id)
    ){
      return true;
    }
    return false;
  }

  setSelectedTipoAreaConhecimentoSubArea(id: Guid, index: number): boolean{
    if(this.propostaModel.idTipoAreaConhecimentoSubArea != null 
    && Object.keys(this.propostaModel.idTipoAreaConhecimentoSubArea).filter(i => i == index.toString()).length > 0 
    && this.propostaModel.idTipoAreaConhecimentoSubArea[index].equals(id)
    ){
      return true;
    }
    return false;
  }

  setSelectedTipoCurso(id: Guid): boolean{
    if(this.propostaModel.idTipoCurso != null
    && this.propostaModel.idTipoCurso.equals(id
    )){
      return true;
    }
    return false;
  }
  //#endregion

  getTipoPubliAlvoEspecificacao(idTipoPublicoAlvo: Guid): string{
    let especificacao: string = '';
    if(this.tipoPublicoAlvo != null 
    && this.propostaModel.publicoAlvo != null
    && this.propostaModel.publicoAlvo.filter(x => x.idTipoPublicoAlvo.equals(idTipoPublicoAlvo) && x.especificacao != null).length > 0
    ){
      especificacao = this.propostaModel.publicoAlvo.find(x => x.idTipoPublicoAlvo.equals(idTipoPublicoAlvo)).especificacao;
    }
    return especificacao;
  }

  //#region Input Events
  radioVinculoOutraProposta(event: Event): void{
    this.propostaModel.vinculadoOutraPrograma = (((<HTMLInputElement> event.target).value == '1')? true: false);
    this.eventEmitterHandler();
  }

  selectVinculadoOutroPrograma(event: Event): void{
    let id = (<HTMLInputElement> event.target).value;
    if(id != '' && Guid.isGuid(id)){
      this.propostaModel.idPropostaVinculada = Guid.parse(id);
      this.eventEmitterHandler();
    }else{
      this.propostaModel.idPropostaVinculada = null;
    }
  }

  selectTipoAtividadeExtensao(event: Event): void{
    let id = (<HTMLInputElement> event.target).value;
    if(id != '' && Guid.isGuid(id)){
      this.propostaModel.idTipoAtividade = Guid.parse(id);
      this.eventEmitterHandler();
    }else{
      this.propostaModel.idTipoAtividade = null;
    }
  }
  
  checkCientePrograma(event: Event): void{
    this.propostaModel.cientePrograma = (<HTMLInputElement> event.target).checked;
    this.eventEmitterHandler();
  }

  checkCienteProjeto(event: Event): void{
    this.propostaModel.cienteProjeto = (<HTMLInputElement> event.target).checked;
    this.eventEmitterHandler();
  }

  radioResponsabilidadeSocial(event: Event): void{
    this.propostaModel.responsabilidadeSocial = (((<HTMLInputElement> event.target).value == '1')? true: false);
    this.eventEmitterHandler();
  }
  
  selectTipoResponsabilidadeSocial(event: Event): void{
    let id = (<HTMLInputElement> event.target).value;
    if(id != '' && Guid.isGuid(id)){
      this.propostaModel.idTipoResponsabilidadeSocial = Guid.parse(id);
      this.eventEmitterHandler();
    }else{
      this.propostaModel.idTipoResponsabilidadeSocial = null;
    }
  }

  selectTipoAreaTematica(values: Array<string>): void{
    this.selectedTipoAreaTematica = values;
    this.propostaModel.idTipoAreaTematica = new Array<Guid>();
    for(let val of values){
      if(val != '' && Guid.isGuid(val)){
        this.propostaModel.idTipoAreaTematica.push(Guid.parse(val));
      }
    }
    this.eventEmitterHandler();
  }

  selectTipoAreaConhecimento(event: Event): void{
    let id = (<HTMLInputElement> event.target).value;
    if(id != '' && Guid.isGuid(id)){
      this.propostaModel.idTipoAreaConhecimento = Guid.parse(id);
      this.eventEmitterHandler();
    }else{
      this.propostaModel.idTipoAreaConhecimento = null;
    }
  }

  selectTipoAreaConhecimentoSubAreas(index: number, event: Event): void{
    let id = (<HTMLInputElement> event.target).value;
    if(this.indexSubAreaConhecimento.filter(x => x == index).length == 1){
      if(id != '' && Guid.isGuid(id)){
        this.propostaModel.idTipoAreaConhecimentoSubArea[index] = Guid.parse(id);
        this.eventEmitterHandler();
      }else if(this.propostaModel.idTipoAreaConhecimentoSubArea != null
        && Object.keys(this.propostaModel.idTipoAreaConhecimentoSubArea).filter(i => i == index.toString()).length > 0){
          if(this.propostaModel.idTipoAreaConhecimentoSubArea.length > 1){
            let temp = this.propostaModel.idTipoAreaConhecimentoSubArea;
            this.propostaModel.idTipoAreaConhecimentoSubArea = new Array<Guid>();
            for(let item of temp){
              if(temp.indexOf(item) != index){
                this.propostaModel.idTipoAreaConhecimentoSubArea[temp.indexOf(item)] = item;
              }
            }
          }else{
            this.propostaModel.idTipoAreaConhecimentoSubArea.splice(index,1);
          }
          this.eventEmitterHandler();
      }
    }
  }

  inputTitulo(event: Event): void{
    this.propostaModel.titulo = (<HTMLInputElement> event.target).value;
    this.eventEmitterHandler();
  }

  selectTipoCurso(event: Event): void{
    let id = (<HTMLInputElement> event.target).value;
    this.propostaModel.codigoCurso = new Array<number>();
    this.selectedCurso = new Array<string>();
    this.optionsCurso = new Array<IOption>();
    if(id != '' && Guid.isGuid(id)){
      this.propostaModel.idTipoCurso = Guid.parse(id);
      if(this.tipoCurso.filter(x => x.idTipoCurso == this.propostaModel.idTipoCurso && x.codigoTipoCurso != null).length == 1){
        this.getCursosPorTipos(this.tipoCurso.find(x => x.idTipoCurso == this.propostaModel.idTipoCurso).codigoTipoCurso.toString());
      }
      this.eventEmitterHandler();
    }else{
      this.propostaModel.idTipoCurso = null;
      this.cursos = new Array<CursoInterface>();
    }
  }

  selectCurso(values: Array<string>): void{
    this.selectedCurso = values;
    this.propostaModel.codigoCurso = new Array<number>();
    for(let val of values){
      if(val != '' && isNumber(val)){
        this.propostaModel.codigoCurso.push(parseInt(val));
      }
    }
    this.eventEmitterHandler();
  }

  checkboxNaoSeAplicaVagas(event: Event): void{
    this.propostaModel.naoSeAplicaVagas = (<HTMLInputElement> event.target).checked;
    this.eventEmitterHandler();
  }

  inputQtdVagas(event: Event): void{
    let val = (<HTMLInputElement> event.target).value;
    if(val != '' && isNumber(val)){
      this.propostaModel.quantidadeVagas = parseInt(val);
      this.eventEmitterHandler();
    }
  }

  selectTipoPublicoAlvo(values: Array<string>): void{
    this.selectedTipoPublicoAlvo = values;
    for(let val of values){
      if(val != '' && Guid.isGuid(val)){
        let publicoAlvo = new PropostaPublicoAlvoModel();
        publicoAlvo.idTipoPublicoAlvo = Guid.parse(val);
        if(this.propostaModel.publicoAlvo.filter(x => x.idTipoPublicoAlvo.equals(publicoAlvo.idTipoPublicoAlvo)).length == 0){
          this.propostaModel.publicoAlvo.push(publicoAlvo);
        }
      }
    }
    if(this.propostaModel.publicoAlvo != null){
      let toRemove = new Array<number>();
      for(let item of this.propostaModel.publicoAlvo){
        if(values.filter(val => Guid.isGuid(val) && item.idTipoPublicoAlvo.equals(Guid.parse(val))).length == 0){
          toRemove.push(this.propostaModel.publicoAlvo.indexOf(item));
        }
      }
      for(let index of toRemove.reverse()){
        this.propostaModel.publicoAlvo.splice(index, 1);
      }
    }
    this.updateTipoPubliAlvoRequerEspecificacao();
    this.eventEmitterHandler();
  }

  textareaEspecificacao(idTipoPublicoAlvo: Guid, event: Event): void{
    if(this.propostaModel.publicoAlvo != null
    && this.propostaModel.publicoAlvo.filter(x => x.idTipoPublicoAlvo == idTipoPublicoAlvo).length > 0){
      this.propostaModel.publicoAlvo.find(x => x.idTipoPublicoAlvo == idTipoPublicoAlvo).especificacao = (<HTMLInputElement> event.target).value;
      this.eventEmitterHandler();
    }
  }

  checkboxTipoInscricao(event: Event): void{
    this.propostaModel.naoSeAplicaInscricao = (<HTMLInputElement> event.target).checked;
    if(this.propostaModel.naoSeAplicaInscricao){
      this.propostaModel.idTipoInscricao = null;
    }
    this.eventEmitterHandler();
  }

  selectTipoInscricao(event: Event): void{
    let id = (<HTMLInputElement> event.target).value;
    if(id != '' && Guid.isGuid(id)){
      this.propostaModel.idTipoInscricao = Guid.parse(id);
      this.eventEmitterHandler();
    }
  }

  textareaJustificativaProposta(event: Event): void{
    this.propostaModel.justificativaProposta = (<HTMLInputElement> event.target).value;
    this.eventEmitterHandler();
  }

  textareaObjetivos(event: Event): void{
    this.propostaModel.objetivos = (<HTMLInputElement> event.target).value;
    this.eventEmitterHandler();
  }

  textareaDescricaoAtivadades(event: Event): void{
    this.propostaModel.descricaoAtivadades = (<HTMLInputElement> event.target).value;
    this.eventEmitterHandler();
  }

  textareaImpactosResultadosEsperados(event: Event): void{
    this.propostaModel.impactosResultadosEsperados = (<HTMLInputElement> event.target).value;
    this.eventEmitterHandler();
  }

  textareaFormaAvalAcaoExtensao(event: Event): void{
    this.propostaModel.formaAvalAcaoExtensao = (<HTMLInputElement> event.target).value;
    this.eventEmitterHandler();
  }

  radioVinculoComEnsino(event: Event): void{
    this.propostaModel.vinculoComEnsino = (((<HTMLInputElement> event.target).value == '1')? true: false);
    this.eventEmitterHandler();
  }

  radioVinculoComPesquisa(event: Event): void{
    this.propostaModel.vinculoComPesquisa = (((<HTMLInputElement> event.target).value == '1')? true: false);
    this.eventEmitterHandler();
  }
  //#endregion
}
