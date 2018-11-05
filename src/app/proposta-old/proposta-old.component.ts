import { Guid } from "guid-typescript";
import { Component, OnInit, Input } from '@angular/core';

// Para consumir APIs via HTTP
import { ApiExtensaoService } from '../services/api-extensao.service';

// Base data
import { PropostaBaseData } from './proposta-base-data';

//Models
import { PropostaModelOld } from './proposta-old.model';
import { PropostaTipoModalidadeModelOld } from './proposta-tipo-modalidade-old.model';

@Component({
  selector: 'app-proposta',
  templateUrl: './proposta-old.component.html',
  styleUrls: ['./proposta-old.component.scss'],
  providers: [
    ApiExtensaoService// Para consumir APIs via HTTP
  ] 
})
export class PropostaComponentOld extends PropostaBaseData implements OnInit {
  private propostaModel: PropostaModelOld = new PropostaModelOld();

  constructor(protected apiExtensaoService: ApiExtensaoService){
    super(apiExtensaoService);
  }

  ngOnInit() {
    console.log(this.tipoInscricao);
  }

  compareGuid(id1: string, id2: string): boolean
  {
    if(Guid.isGuid(id1) && Guid.isGuid(id2)){
      let id1Guid = Guid.parse(id1.toLowerCase());
      let id2Guid = Guid.parse(id2.toLowerCase());
      return id1Guid.equals(id2Guid);
    }
    return false;
  }

  
  //Termo de responsabilidade social
  
  PossuiTrab(value: boolean){   
    this.propostaModel.haveraApresentacao = value;    
   }




  TextoInclusaoSocial = false;
  TextoDesenvolvEcoSocial= false;
  TextoDedfesaAmbiente=false;
  TextoMemCultural= false;
  TextoPatrCultural = false;
  empSelected = String;
  // termocompartConh = false;
  JustificativaParcRventCur = false;
  AnexoComprobatorio=false;
  TipoRespSocial=false;
  JustificativaAcaoResp = false;
  JustificativaOutros=false;
  AddInterno = true;
  AddExterno= false;
  Textoacao = false;
  Textoatividade = false;
  Textoprojeto = false;
  Textoprograma = false;
  JustificativaInfraOutros = false;
  InformacoesTransporte = false;
  Planilhadecustos = false; 
  quantidade = false;
  


//Ação ao selecionar a opção "Modalidade"
  clickModalidade(event:any): void{  
    let id = Guid.parse((<HTMLInputElement>event.currentTarget).value);
    
    switch (event.currentTarget.checked )
    {       
      case true:
        this.propostaModel.tipoModalidade.push(id);
      break;  
      default:
        if(this.propostaModel.tipoModalidade.filter(x => x.equals(id)).length > 0){
          this.propostaModel.tipoModalidade = this.propostaModel.tipoModalidade.filter(x => !x.equals(id));
        }
      break;    
    }  
 }

 checkModalidade(id: string): boolean{
  let idGuid: Guid = Guid.parse(id.toLowerCase()); 
  if(this.propostaModel.tipoModalidade.filter(x => x.equals(idGuid)).length > 0){  
    return true;
  }  
  return false;
 }

  subitemAtvExtensao(idBase: string, idComparacao: string): boolean
  {
    if(
        this.compareGuid(idBase, idComparacao)
    &&  this.checkModalidade(idComparacao)
    )
      return true;

    return false;
  }

  subitemAtvExtensaoPatEventoCurso(idBase: string, idComparacao: string, target: string): boolean
  {

    if(
        this.subitemAtvExtensao(idBase, idComparacao)
    &&  this.propostaModel.haveraApresentacao == false
    &&  target == 'ciente'
    ){
      return true;
    }else if(
      this.subitemAtvExtensao(idBase, idComparacao)
    &&  this.propostaModel.haveraApresentacao == true
    &&  target == 'envArquivo'
    ){
      return true;
    }
    
    return false;
  }

  











Exibircomplemento = true;
  SelectedSubTipoModalidade(idModalidade: Guid, event:Event)
  {      
    let idSubTipoModalidade: Guid = Guid.parse((<HTMLInputElement>event.target).value);
    this.propostaModel.subTipoModalidade = new PropostaTipoModalidadeModelOld(idModalidade, idSubTipoModalidade); 
    console.log(this.propostaModel);
  }

















    //Carrega informações do tipo de responsabilidade social
    employeeSelected(value:any)
    {
       this.empSelected =value;
      if( value=="01")
      {
        this.TextoInclusaoSocial = false;
        this.TextoDesenvolvEcoSocial= false;
        this.TextoDedfesaAmbiente=false;
        this.TextoMemCultural= false;
        this.TextoPatrCultural = false;
        this.JustificativaAcaoResp = false;
      }
      else
      if( value=="02")
      {
        this.TextoInclusaoSocial = true;
        this.TextoDesenvolvEcoSocial= false;
        this.TextoDedfesaAmbiente=false;
        this.TextoMemCultural= false;
        this.TextoPatrCultural = false;
        this.JustificativaAcaoResp = true;
      }
      else
      if( value=="03")
      {
        this.TextoInclusaoSocial = false;
        this.TextoDesenvolvEcoSocial= true;
        this.TextoDedfesaAmbiente=false;
        this.TextoMemCultural= false;
        this.TextoPatrCultural = false;
        this.JustificativaAcaoResp = true;
      }
      else
      if( value=="04")
      {
        this.TextoInclusaoSocial = false;
        this.TextoDesenvolvEcoSocial= false;
        this.TextoDedfesaAmbiente=true;
        this.TextoMemCultural= false;
        this.TextoPatrCultural = false;
        this.JustificativaAcaoResp = true;
      }
      else
      if( value=="05")
      {
        this.TextoInclusaoSocial = false;
        this.TextoDesenvolvEcoSocial= false;
        this.TextoDedfesaAmbiente=false;
        this.TextoMemCultural= true;
        this.TextoPatrCultural = false;
        this.JustificativaAcaoResp = true;
      }
      else
      if( value=="06")
      {
        this.TextoInclusaoSocial = false;
        this.TextoDesenvolvEcoSocial= false;
        this.TextoDedfesaAmbiente=false;
        this.TextoMemCultural= false;
        this.TextoPatrCultural = true;
      }
    }



    // PossuiApresentacaoTrabalho(values:any){
    //   if(values == 'Sim')
    //   {
    //     this.termocompartConh = false;
    //     this.JustificativaParcRventCur = false;
    //     this.AnexoComprobatorio = true;
    //   }
    //   else
    //   {
    //     this.termocompartConh = true;
    //     this.JustificativaParcRventCur = true;
    //     this.AnexoComprobatorio = false;
    //   }

    // }

    FieldsChangeRespSocial(values:any){
      this.TextoInclusaoSocial = false;
      this.TextoDesenvolvEcoSocial= false;
      this.TextoDedfesaAmbiente=false;
      this.TextoMemCultural= false;
      this.TextoPatrCultural = false;
      this.TipoRespSocial = values.currentTarget.checked;
      this.JustificativaAcaoResp = false;
    }

    FieldsChangeOutros(values:any){
      this.JustificativaOutros = values.currentTarget.checked;
      }

    PessoalInterno(values:any){
      if(values == 'Inter')
      {
          this.AddInterno = true;
          this.AddExterno= false;
      }
      else
      {
          this.AddInterno = false;
          this.AddExterno= true;
      }
    }

    employeeSelectedNivel(value:any)
    {
        this.empSelected =value;
      if( value=="01")
      {
          this.Textoacao = false;
          this.Textoatividade = false;
          this.Textoprojeto = false;
          this.Textoprograma = false;
      }
      else
      if( value=="02")
      {
        this.Textoacao = true;
          this.Textoatividade = false;
          this.Textoprojeto = false;
          this.Textoprograma = false;
      }
      else
      if( value=="03")
      {
        this.Textoacao = false;
          this.Textoatividade = true;
          this.Textoprojeto = false;
          this.Textoprograma = false;
      }
      else
      if( value=="04")
      {
        this.Textoacao = false;
          this.Textoatividade = false;
          this.Textoprojeto = true;
          this.Textoprograma = false;
      }
      else
      if( value=="05")
      {
        this.Textoacao = false;
          this.Textoatividade = false;
          this.Textoprojeto = false;
          this.Textoprograma = true;
      }
    }

    FieldsChangeInfraOutros(values:any){
      this.JustificativaInfraOutros = values.currentTarget.checked;
      }

    FieldsChangeInfraFretamento(values:any){
      this.InformacoesTransporte = values.currentTarget.checked;
      }
    PossuiOrcamento(values:any){
      if(values == 'Sim')
      {
        this.Planilhadecustos = true;
      }
      else
      {
        this.Planilhadecustos = false;
      }
    }
    
      desabilitaVagas = true;
      checkboxNaoAplVagas(value:any){
        this.desabilitaVagas =  value.currentTarget.checked;        
      }
      DesabilitaVagas(){
        return  this.desabilitaVagas;
      }

      EspecificarPublicoExterno = false;
      checkboxPubicoExterno(value:any){   
        this.EspecificarPublicoExterno =  value.currentTarget.checked;
     } 
    



    
     empSelectedTipoinscricao=Boolean; 
     EspecificarTipoInscricao = false;
     employeeSelectedTipoinscricao(value:any)
     {
        this.empSelectedTipoinscricao =value;
        if( value=="Outros")
        {
            this.EspecificarTipoInscricao = true;           
        }
        else
        {
            this.EspecificarTipoInscricao = false;           
        }
            
     }

    desabilitaInscricao = true;
    checkboxNaoAplTipoInsc(value:any){        
      this.desabilitaInscricao =  value.currentTarget.checked;
    }
    DesabilitaInscricao(){
      return  this.desabilitaInscricao;
    }
    EscondeCampoEspecificarInscricao(){
      return  this.desabilitaInscricao;
    }


    CoordenadorCurso02 = false;
    CoordenadorCurso03 = false;
    CoordenadorCurso04 = false;
    CoordenadorCurso05 = false;
    empSelectedCurso=Boolean;
    employeeSelectedCurso(valueC:any)
    {  
      this.empSelectedCurso = valueC;
       if( valueC=="01")
       {
         this.CoordenadorCurso02 = false;
         this.CoordenadorCurso03 = false;
         this.CoordenadorCurso04 = false;
         this.CoordenadorCurso05 = false;
       }
      if( valueC=="02")
      {
        this.CoordenadorCurso02 = true;
        this.CoordenadorCurso03 = false;
        this.CoordenadorCurso04 = false;
        this.CoordenadorCurso05 = false;
      }
      if( valueC=="03")
      {
        this.CoordenadorCurso02 = false;
        this.CoordenadorCurso03 = true;
        this.CoordenadorCurso04 = false;
        this.CoordenadorCurso05 = false;
      }
      if( valueC=="04")
      {
        this.CoordenadorCurso02 = false;
        this.CoordenadorCurso03 = false;
        this.CoordenadorCurso04 = true;
        this.CoordenadorCurso05 = false;
      }
      if( valueC=="05")
      {
        this.CoordenadorCurso02 = false;
        this.CoordenadorCurso03 = false;
        this.CoordenadorCurso04 = false;
        this.CoordenadorCurso05 = true;
      }
    }
    
   

    eventoUnico = false;
    eventosemanal = false;
    eventoDiario = false;
    eventomensal = false;
    eventocronograma = false;
    Eventounico(values:any){
     if(values == 'unico')
     {
        this.eventoUnico = true;
        this.eventoDiario = false;
        this.eventosemanal = false;
        this.eventomensal = false;
        this.eventocronograma =false;
     }
    }

    Eventodiario(values:any){
       if(values == 'diario')
       {
          this.eventoUnico = false;
          this.eventoDiario = true;
          this.eventosemanal = false;
          this.eventomensal = false;
          this.eventocronograma =false;
       }
     }

     Eventosemanal(values:any){
      if(values == 'semanal')
      {
        this.eventoUnico = false;
        this.eventoDiario = false;
        this.eventosemanal = true;
        this.eventomensal = false;
        this.eventocronograma =false;
      }
    }

    Eventomensal(values:any){
     if(values == 'mensal')
     {
       this.eventoUnico = false;
       this.eventoDiario = false;
       this.eventosemanal = false;
       this.eventomensal = true;
       this.eventocronograma =false;
     }
   }

   Eventocronograma(values:any){
    if(values == 'cronograma')
    {
      this.eventoUnico = false;
      this.eventoDiario = false;
      this.eventosemanal = false;
      this.eventomensal = false;
      this.eventocronograma =true;
    }
  }

  eventomensalsemana=false;
  eventomensaldia = false;
  EventomensalDia(values:any){
    if(values == 'dia')
    {
      this.eventomensalsemana = false;
      this.eventomensaldia=true;
    }
  }
  EventomensalSemana(values:any){
    if(values == 'semana')
    {
      this.eventomensalsemana = true;
      this.eventomensaldia=false;
    }}





    openMyModal(event) {
      document.querySelector('#' + event).classList.add('md-show');
    }
  
    closeMyModal(event) {
      ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
    }
  

 
}