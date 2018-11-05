import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Functions } from '../../../shared/functions';
import { Validations } from '../../../shared/validations';

import { EnvolvidosBaseData } from './envolvidos-base-data';

//#region Services
import { ApiExtensaoService } from '../../../services/api-extensao.service';
//#endregion

//#region Interfaces
import { ConfiguracaoGeralInterface } from '../../../services/interfaces/api-extensao/configuracao-geral.interface';
//#endregion

//#region Models
import { PropostaModel } from '../../../services/models/api-extensao/proposta.model';
import { TipoEquipePessoaModel } from '../../../services/models/api-extensao/tipo-equipe-pessoa.model';
import { PessoaInterface } from '../../../services/interfaces/api-extensao/pessoa.interface';
import { PessoaModel } from '../../../services/models/api-extensao/pessoa.model';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
//#endregion

@Component({
  selector: 'app-envolvidos',
  templateUrl: './envolvidos.component.html',
  styleUrls: ['./envolvidos.component.scss'],
  providers: [
    ApiExtensaoService,
    Functions,
    Validations
  ]
})
export class EnvolvidosComponent extends EnvolvidosBaseData implements OnInit, OnDestroy {
  @Input() public configuracaoGera: ConfiguracaoGeralInterface;
  @Input() public propostaModel: PropostaModel;
  @Output() public propostaModelFeedBack = new EventEmitter();
  @Output() public selectTab = new EventEmitter();

  public modalTitle: string = '';
  public modalIdTipoEquipe: Guid;
  public modalBtnEdit: boolean = false;

  public maskPhone10Dig: any = ['(', /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
  public maskPhone11Dig: any = ['(', /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
  public maskCPF: any = { mask: [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/], guid: true };
  public input1MaskPhone: any;

  constructor(protected apiExtensaoService: ApiExtensaoService, protected functions: Functions, protected validations: Validations){
    super(apiExtensaoService);
  }

  ngOnInit() {
    this.input1MaskPhone = {
      mask: this.maskPhone10Dig,
      guid: true
    }

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.eventEmitterHandler();
  }

  eventEmitterHandler(): void{
    this.propostaModelFeedBack.emit(this.propostaModel);
  }

  previewTab(): void{
    this.selectTab.emit('basico');
  }

  nextTab(): void{
    this.selectTab.emit('peridoCronograma');
  }

  //#region Bunttons
  btnRemove(idPessoa: Guid): void{
    if(confirm("Tem certeza que deseja remover esta(s) pessoa(s)?")){
      document.querySelector('#'+idPessoa.toString()).remove();
    }
  }

  btnModalAlter(pessoa: PessoaModel){
    let clone: PessoaModel = new PessoaModel();
    clone.setPessoa(pessoa.idPessoa, pessoa.idTipoVinculo, pessoa.nome, pessoa.email, pessoa.telefone, pessoa.cpf);
    this.pessoa = clone;
    this.modalBtnEdit = true;
    document.querySelector('#modalDefault').classList.add('md-show');
  }

  btnEdit(): void{
    if(this.validaDadosPessoa()
    && this.pessoaAdicionadaEquipe(this.pessoa.cpf)
    ){
      let altPessoa: PessoaModel = <PessoaModel> this.propostaModel
        .equipes.find(e => e.idTipoEquipe != null && e.idTipoEquipe == this.modalIdTipoEquipe)
        .pessoas.find(p => p.idPessoa == this.pessoa.idPessoa);

      altPessoa.setPessoa(this.pessoa.idPessoa, this.pessoa.idTipoVinculo, this.pessoa.nome, this.pessoa.email, this.pessoa.telefone, this.pessoa.cpf);
      this.eventEmitterHandler();
      document.querySelector('#modalDefault').classList.remove('md-show');
      this.resetModal();
    }else{
      alert('Erro, informe os dados da pessoa corretamente.');
    }
  }

  btnAdd(): void{
    if(this.validaDadosPessoa()
    && !this.pessoaAdicionadaEquipe(this.pessoa.cpf)
    ){
      if(this.propostaModel.equipes == null
      || this.propostaModel.equipes.length == 0
      || this.propostaModel.equipes.filter(e => e.idTipoEquipe != null && e.idTipoEquipe == this.modalIdTipoEquipe).length == 0
      ){
        let arrPessoas: Array<PessoaInterface> = new Array<PessoaInterface>();
        let newPessoa = new PessoaModel();
        newPessoa.setPessoa(((this.pessoa.idPessoa != null)? this.pessoa.idPessoa:Guid.create()), this.pessoa.idTipoVinculo, this.pessoa.nome, this.pessoa.email, this.pessoa.telefone, this.pessoa.cpf);
        arrPessoas.push(newPessoa);
        let arrEquipe = new TipoEquipePessoaModel(this.modalIdTipoEquipe, arrPessoas);
        this.propostaModel.equipes.push(arrEquipe);
      }else{
        let newPessoa = new PessoaModel();
        newPessoa.setPessoa(((this.pessoa.idPessoa != null)? this.pessoa.idPessoa:Guid.create()), this.pessoa.idTipoVinculo, this.pessoa.nome, this.pessoa.email, this.pessoa.telefone, this.pessoa.cpf);
        this.propostaModel.equipes.find(e => e.idTipoEquipe != null && e.idTipoEquipe == this.modalIdTipoEquipe).pessoas.push(newPessoa);
      }
      this.eventEmitterHandler();
      document.querySelector('#modalDefault').classList.remove('md-show');
      this.resetModal();
    }else{
      if(this.pessoa.cpf != null
      && this.pessoa.cpf.length > 0
      && this.validations.cpf(this.pessoa.cpf)
      && this.pessoaAdicionadaEquipe(this.pessoa.cpf)
      ){
        alert('Esta pessoa já está inserida nesta equipe.');
      }else if(Guid.parse('48a0a79b-603d-46fe-9f4d-f4909fe60dbf').equals(this.pessoa.idTipoVinculo)){ //Vinculo Pessoal Interno
        alert('Selecione um colaborador.');
      }else if(Guid.parse('9f4e647d-8cb9-4755-a4a3-a7909cc2cd7f').equals(this.pessoa.idTipoVinculo)){ //Vinculo Pessoal Externo
        alert('Erro, informe os dados da pessoa corretamente.');
      }
    }
  }

  btnOpenModal(idTipoEquipe: Guid): void{
    this.modalIdTipoEquipe = idTipoEquipe;
    this.setModalTitle();
    document.querySelector('#modalDefault').classList.add('md-show');
  }

  btnCloseModal(){
    document.querySelector('#modalDefault').classList.remove('md-show');
    this.resetModal();
  }
  //#endregion

  //#region Modal Functions
  resetModal(){
    this.modalBtnEdit = false;
    this.input1MaskPhone = {
      mask: this.maskPhone10Dig,
      guid: true
    }
    this.clearPessoa();
  }

  setModalTitle(): void{
    if(this.modalIdTipoEquipe != null && this.tiposEquipe != null)
      this.modalTitle = this.tiposEquipe.find(t => t.idTipoEquipe == this.modalIdTipoEquipe).descricaoTipoEquipe;
  }
  //#endregion

  //#region Other Functions
  getPessoasEquipe(id: string): Array<PessoaInterface>{
    let idTipoEquipe = Guid.parse(id);
    if(this.propostaModel.equipes.filter(e => e.idTipoEquipe != null && idTipoEquipe.equals(e.idTipoEquipe) && e.pessoas != null).length > 0){
      return this.propostaModel.equipes.find(e => e.idTipoEquipe != null && idTipoEquipe.equals(e.idTipoEquipe) && e.pessoas != null).pessoas;
    }
    return new Array<PessoaInterface>();
  }

  clearPessoa(){
    this.pessoa.setPessoa(null,this.pessoa.idTipoVinculo,null,null,null,null);
  }

  validaDadosPessoa(): boolean{
    if(this.modalIdTipoEquipe != null
      && this.pessoa.idTipoVinculo != null
      && this.pessoa.nome != null
      && this.pessoa.nome.length > 0
      && this.pessoa.email != null
      && this.pessoa.email.length > 0
      && this.validations.email(this.pessoa.email)
      && this.pessoa.telefone != null
      && this.pessoa.telefone.length >= 10
      && this.pessoa.cpf != null
      && this.pessoa.cpf.length > 0
      && this.validations.cpf(this.pessoa.cpf)
    ){
      return true;
    }
    return false;
  }

  pessoaAdicionadaEquipe(cpf: string): boolean{
    if(this.propostaModel.equipes != null
    && this.propostaModel.equipes.filter(e => e.idTipoEquipe == this.modalIdTipoEquipe).length > 0
    && this.propostaModel.equipes.find(e => e.idTipoEquipe == this.modalIdTipoEquipe).pessoas.filter(p => this.functions.removeMaskNumber(p.cpf) == this.functions.removeMaskNumber(cpf)).length > 0
    ){
      return true;
    }
    return false;
  }
  //#endregion

  //#region Set Selected e Checked
  checkedTipoVinculo(idTipoVinculo: Guid): boolean{
    if(this.pessoa != null
    && this.pessoa.idTipoVinculo != null
    && idTipoVinculo == this.pessoa.idTipoVinculo
    ){
      return true;
    }
    return false;
  }
  //#endregion

  //#region Inputs Events
  selectPessoaColaborador(event:  Event): void{
    let val = (<HTMLInputElement> event.target).value;
    if(val != '' && isNumber(val)){
      let codigoPessoa = +val;
      if(this.rmPessoas.filter(p => p.codigoPessoa == codigoPessoa).length > 0){
        let rmPessoa = this.rmPessoas.find(p => p.codigoPessoa == codigoPessoa);
        this.pessoa.setPessoa(Guid.create(), this.pessoa.idTipoVinculo, rmPessoa.nome, rmPessoa.email, rmPessoa.telefone, rmPessoa.cpf);
        console.log(this.pessoa);
      }else{
        alert('Selecione um colaborador válido.');
      }
    }
  }

  radioTipoVinculo(id: Guid): void{
    this.pessoa.idTipoVinculo = id;
    this.clearPessoa();
  }

  inputPessoaNome(event:  Event): void{
    this.pessoa.nome = (<HTMLInputElement> event.target).value;
  }

  inputPessoaCpf(event:  Event): void{
    let val = (<HTMLInputElement> event.target).value;
    if(this.functions.removeMaskNumber(val).length == 11 && this.validations.cpf(val)){
      this.pessoa.cpf = val;
      (<HTMLInputElement> event.target).classList.remove('form-control-danger');
    }else if(this.functions.removeMaskNumber(val).length == 11 && !this.validations.cpf(val)){
      (<HTMLInputElement> event.target).classList.add('form-control-danger');
      alert('CPF inválido.');
    }else{
      (<HTMLInputElement> event.target).classList.remove('form-control-danger');
    }
  }

  inputPessoaEmail(event:  Event): void{
    let val = (<HTMLInputElement> event.target).value;
    if(this.validations.email(val)){
      this.pessoa.email = val.toLowerCase();
    }else{
      this.pessoa.email = null;
    }
  }

  inputPessoaTelefone(event:  Event): void{
    let val = (<HTMLInputElement> event.target).value;
    if(this.functions.removeMaskNumber(val).length == 11){
      this.pessoa.telefone = this.functions.maskPhone(val);
      this.input1MaskPhone = {
        mask: this.maskPhone11Dig,
        guid: true
      }
    }else if(this.functions.removeMaskNumber(val).length == 10){
      this.pessoa.telefone = this.functions.maskPhone(val);
      this.input1MaskPhone = {
        mask: this.maskPhone10Dig,
        guid: true
      }
    }else{
      this.pessoa.telefone = null;
    }
  }
  //#endregion

}
