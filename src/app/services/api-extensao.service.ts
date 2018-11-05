import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BaseApiService } from './base-api.service';
import 'rxjs/Rx';
import { Guid } from 'guid-typescript';

//#region Interfaces
import { BancoInterface } from './interfaces/api-extensao/banco.interface';
import { ConfiguracaoGeralInterface } from './interfaces/api-extensao/configuracao-geral.interface';
import { CursoInterface } from './interfaces/api-extensao/curso.interface';
import { CustoRecursosHumanosFormaPgtoAnexosInterface } from './interfaces/api-extensao/custo-recursos-humanos-forma-pgto-anexos.interface';
import { CustoRecursosHumanosOpcoesInterface } from './interfaces/api-extensao/custo-recursos-humanos-opcoes.interface';
import { CustoRecursosHumanosOpcoesValorFixoEspecialInterface } from './interfaces/api-extensao/custo-recursos-humanos-opcoes-valor-fixo-especial.interface';
import { CustoRecursosHumanosPessoalExternoFormaPgtoInterface } from './interfaces/api-extensao/custo-recursos-humanos-pessoal-externo-forma-pgto.interface';
import { CustoRecursosHumanosPessoalExternoOpcoesInterface } from './interfaces/api-extensao/custo-recursos-humanos-pessoal-externo-opcoes.interface';
import { DespesasMarketingItensInterface } from './interfaces/api-extensao/despesas-marketing-itens.interface';
import { DespesasViagemItensInterface } from './interfaces/api-extensao/despesas-viagem-itens.interface';
import { DespesasViagemResponsaveisCompraInterface } from './interfaces/api-extensao/despesas-viagem-responsaveis-compra.interface';
import { FluxoAprovacaoInterface } from './interfaces/api-extensao/fluxo-aprovacao.interface';
import { OutrasDespesasItensInterface } from './interfaces/api-extensao/outras-despesas-itens.interface';
import { PropostaInterface } from './interfaces/api-extensao/proposta.interface';
import { PropostaListaInterface } from './interfaces/api-extensao/proposta-lista.interface';
import { ReceitaItensInterface } from './interfaces/api-extensao/receita-itens.interface';
import { RmPessoaInterface } from './interfaces/api-extensao/rm-pessoa.interface';
import { TipoAreaConhecimentoInterface } from './interfaces/api-extensao/tipo-area-conhecimento.interface';
import { TipoAreaConhecimentoSubAreasInterface } from './interfaces/api-extensao/tipo-area-conhecimento-sub-areas.interface';
import { TipoAreaTematicaInterface } from './interfaces/api-extensao/tipo-area-tematica.interface';
import { TipoAtividadeInterface } from './interfaces/api-extensao/tipo-atividade.interface';
import { TipoContaInterface } from './interfaces/api-extensao/tipo-conta.interface';
import { TipoCursoInterface } from './interfaces/api-extensao/tipo-curso.interface';
import { TipoEquipeInterface } from './interfaces/api-extensao/tipo-equipe.interface';
import { TipoInscricaoInterface } from './interfaces/api-extensao/tipo-inscricao.interface';
import { TipoPublicoAlvoInterface } from './interfaces/api-extensao/tipo-publico-alvo.interface';
import { TipoResponsabilidadeSocialInterface } from './interfaces/api-extensao/tipo-responsabilidade-social.interface';
import { TipoVinculoInterface } from './interfaces/api-extensao/tipo-vinculo.interface';
//#endregion

//#region Models
import { GetPropostaModel } from './models/api-extensao/get-proposta.model';
//#region 

@Injectable()
export class ApiExtensaoService extends BaseApiService{   
  private apiSubDomain: string = 'barao/extensao/';

  constructor(protected http: Http) {
    super(http);
    this.urlApi += this.apiSubDomain;
  }
  
  //#region Get
  //#region Bancos
  getBancos(): Observable<Array<BancoInterface>> {
    return this.http
        .get(this.urlApi + 'v1/bancos/')
        .map((response: Response) => {
          return <Array<BancoInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getBancoPorId(id: Guid): Observable<BancoInterface> {
    return this.http
        .get(this.urlApi + 'v1/bancos/' + id.toString())
        .map((response: Response) => {
          return <BancoInterface>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion 
  
  //#region ConfiguracaoGeral
  getConfiguracaoGeral(): Observable<ConfiguracaoGeralInterface> {
    return this.http
        .get(this.urlApi + 'v1/configuracao/geral/')
        .map((response: Response) => {
          return <ConfiguracaoGeralInterface>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion

  //#region Curso
  getCursos(): Observable<Array<CursoInterface>> {
    return this.http
        .get(this.urlApi + 'v1/cursos/')
        .map((response: Response) => {
          return <Array<CursoInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getCursoPorId(id: number): Observable<Array<CursoInterface>> {
    return this.http
        .get(this.urlApi + 'v1/cursos/' + id.toString())
        .map((response: Response) => {
          return <Array<CursoInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getCursosPorCodigos(codigosCurso: string): Observable<Array<CursoInterface>> {
    return this.http
        .get(this.urlApi + 'v1/cursos/' + codigosCurso)
        .map((response: Response) => {
          return <Array<CursoInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getCursosPorTipos(codigosTipoCurso: string): Observable<Array<CursoInterface>> {
    return this.http
        .get(this.urlApi + 'v1/cursos/tipos/' + codigosTipoCurso)
        .map((response: Response) => {
          return <Array<CursoInterface>>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion

  //#region CustoRecursosHumanosFormaPgtoAnexos
  getCustoRecursosHumanosFormaPgtoAnexos(): Observable<Array<CustoRecursosHumanosFormaPgtoAnexosInterface>> {
    return this.http
        .get(this.urlApi + 'v1/custos/recursos_humanos/tipo/anexo/')
        .map((response: Response) => {
          return <Array<CustoRecursosHumanosFormaPgtoAnexosInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getCustoRecursosHumanosFormaPgtoAnexosPorFomaPgto(idFormaPgto: Guid): Observable<Array<CustoRecursosHumanosFormaPgtoAnexosInterface>> {
    return this.http
        .get(this.urlApi + 'v1/custos/recursos_humanos/tipo/anexo/forma_pgto/' + idFormaPgto.toString())
        .map((response: Response) => {
          return <Array<CustoRecursosHumanosFormaPgtoAnexosInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getCustoRecursosHumanosFormaPgtoAnexosPorId(id: Guid): Observable<CustoRecursosHumanosFormaPgtoAnexosInterface> {
    return this.http
        .get(this.urlApi + 'v1/custos/recursos_humanos/tipo/anexo/' + id.toString())
        .map((response: Response) => {
          return <Array<CustoRecursosHumanosFormaPgtoAnexosInterface>>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion

  //#region CustoRecursosHumanosOpcoes
  getCustoRecursosHumanosOpcoes(): Observable<Array<CustoRecursosHumanosOpcoesInterface>> {
    return this.http
        .get(this.urlApi + 'v1/custos/recursos_humanos/opcoes/')
        .map((response: Response) => {
          return <Array<CustoRecursosHumanosOpcoesInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getCustoRecursosHumanosOpcoesPorId(id: Guid): Observable<CustoRecursosHumanosOpcoesInterface> {
    return this.http
        .get(this.urlApi + 'v1/custos/recursos_humanos/opcoes/' + id.toString())
        .map((response: Response) => {
          return <CustoRecursosHumanosOpcoesInterface>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion 

  //#region CustoRecursosHumanosOpcoesValorFixoEspecial
  getCustoRecursosHumanosOpcoesValorFixoEspecial(): Observable<Array<CustoRecursosHumanosOpcoesValorFixoEspecialInterface>> {
    return this.http
        .get(this.urlApi + 'v1/custos/recursos_humanos/opcoes_valor_fixo_especial/')
        .map((response: Response) => {
          return <Array<CustoRecursosHumanosOpcoesValorFixoEspecialInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getCustoRecursosHumanosOpcoesValorFixoEspecialPorId(id: Guid): Observable<Array<CustoRecursosHumanosOpcoesValorFixoEspecialInterface>> {
    return this.http
        .get(this.urlApi + 'v1/custos/recursos_humanos/opcoes_valor_fixo_especial/' + id.toString())
        .map((response: Response) => {
          return <Array<CustoRecursosHumanosOpcoesValorFixoEspecialInterface>>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion

  //#region CustoRecursosHumanosPessoalExternoFormaPgto
  getCustoRecursosHumanosPessoalExternoFormaPgto(): Observable<Array<CustoRecursosHumanosPessoalExternoFormaPgtoInterface>> {
    return this.http
        .get(this.urlApi + 'v1/custos/recursos_humanos/pessoal_externo_forma_pgto/')
        .map((response: Response) => {
          return <Array<CustoRecursosHumanosPessoalExternoFormaPgtoInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getCustoRecursosHumanosPessoalExternoFormaPgtoPorId(id: Guid): Observable<CustoRecursosHumanosPessoalExternoFormaPgtoInterface> {
    return this.http
        .get(this.urlApi + 'v1/custos/recursos_humanos/pessoal_externo_forma_pgto/' + id.toString())
        .map((response: Response) => {
          return <CustoRecursosHumanosPessoalExternoFormaPgtoInterface>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion

  //#region CustoRecursosHumanosPessoalExternoOpcoes
  getCustoRecursosHumanosPessoalExternoOpcoes(): Observable<Array<CustoRecursosHumanosPessoalExternoOpcoesInterface>> {
    return this.http
        .get(this.urlApi + 'v1/custos/recursos_humanos/pessoal_externo_opcoes/')
        .map((response: Response) => {
          return <Array<CustoRecursosHumanosPessoalExternoOpcoesInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getCustoRecursosHumanosPessoalExternoOpcoesPorId(id: Guid): Observable<CustoRecursosHumanosPessoalExternoOpcoesInterface> {
    return this.http
        .get(this.urlApi + 'v1/custos/recursos_humanos/pessoal_externo_opcoes/' + id.toString())
        .map((response: Response) => {
          return <CustoRecursosHumanosPessoalExternoOpcoesInterface>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion

  //#region DespesasMarketingItens
  getDespesasMarketingItens(): Observable<Array<DespesasMarketingItensInterface>> {
    return this.http
        .get(this.urlApi + 'v1/despesas/marketing/itens/')
        .map((response: Response) => {
          return <Array<DespesasMarketingItensInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getDespesasMarketingItensPorId(id: Guid): Observable<DespesasMarketingItensInterface> {
    return this.http
        .get(this.urlApi + 'v1/despesas/marketing/itens/' + id.toString())
        .map((response: Response) => {
          return <DespesasMarketingItensInterface>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion

  //#region DespesasViagemItens
  getDespesasViagemItens(): Observable<Array<DespesasViagemItensInterface>> {
    return this.http
        .get(this.urlApi + 'v1/despesas/viagem/itens/')
        .map((response: Response) => {
          return <Array<DespesasViagemItensInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getDespesasViagemItensPorId(id: Guid): Observable<DespesasViagemItensInterface> {
    return this.http
        .get(this.urlApi + 'v1/despesas/viagem/itens/' + id.toString())
        .map((response: Response) => {
          return <DespesasViagemItensInterface>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion

  //#region DespesasViagemResponsaveisCompra
  getDespesasViagemResponsaveisCompra(): Observable<Array<DespesasViagemResponsaveisCompraInterface>> {
    return this.http
        .get(this.urlApi + 'v1/despesas/viagem/responsaveis_compra/')
        .map((response: Response) => {
          return <Array<DespesasViagemResponsaveisCompraInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getDespesasViagemResponsaveisCompraPorId(id: Guid): Observable<DespesasViagemResponsaveisCompraInterface> {
    return this.http
        .get(this.urlApi + 'v1/despesas/viagem/responsaveis_compra/' + id.toString())
        .map((response: Response) => {
          return <DespesasViagemResponsaveisCompraInterface>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion

  //#region FluxoAprovacao
  getFluxoAprovacao(): Observable<Array<FluxoAprovacaoInterface>> {
    return this.http
        .get(this.urlApi + 'v1/fluxo_aprovacao/')
        .map((response: Response) => {
          return <Array<FluxoAprovacaoInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getFluxoAprovacaoPorFase(fase: number): Observable<Array<FluxoAprovacaoInterface>> {
    return this.http
        .get(this.urlApi + 'v1/fluxo_aprovacao/' + fase.toString())
        .map((response: Response) => {
          return <Array<FluxoAprovacaoInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getFluxoAprovacaoPorFaseIdEtapa(fase: number, idEtapa: Guid): Observable<Array<FluxoAprovacaoInterface>> {
    return this.http
        .get(this.urlApi + 'v1/fluxo_aprovacao/' + fase.toString() + '/' + idEtapa.toString())
        .map((response: Response) => {
          return <Array<FluxoAprovacaoInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getFluxoAprovacaoPorFaseIdEtapaIdStatus(fase: number, idEtapa: Guid, idStatus: Guid): Observable<Array<FluxoAprovacaoInterface>> {
    return this.http
        .get(this.urlApi + 'v1/fluxo_aprovacao/' + fase.toString() + '/' + idEtapa.toString() + '/' + idStatus.toString())
        .map((response: Response) => {
          return <Array<FluxoAprovacaoInterface>>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion

  //#region OutrasDespesasItens
  getOutrasDespesasItens(): Observable<Array<OutrasDespesasItensInterface>> {
    return this.http
        .get(this.urlApi + 'v1/despesas/outras/itens/')
        .map((response: Response) => {
          return <Array<OutrasDespesasItensInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getOutrasDespesasItensPorId(id: Guid): Observable<Array<OutrasDespesasItensInterface>> {
    return this.http
        .get(this.urlApi + 'v1/despesas/outras/itens/' + id.toString())
        .map((response: Response) => {
          return <Array<OutrasDespesasItensInterface>>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion

  //#region ReceitaItens
  getReceitaItens(): Observable<Array<ReceitaItensInterface>> {
    return this.http
        .get(this.urlApi + 'v1/receita/itens/')
        .map((response: Response) => {
          return <Array<ReceitaItensInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getReceitaItensPorId(id: Guid): Observable<Array<ReceitaItensInterface>> {
    return this.http
        .get(this.urlApi + 'v1/receita/itens/' + id.toString())
        .map((response: Response) => {
          return <Array<ReceitaItensInterface>>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion

  //#region RmPessoas
  getRmPessoasEnvolvidos(): Observable<Array<RmPessoaInterface>> {
    return this.http
        .get(this.urlApi + 'v1/rm/pessoas/envolvidos/')
        .map((response: Response) => {
          return <Array<RmPessoaInterface>>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion

  //#region TipoAreaConhecimento
  getTipoAreaConhecimento(): Observable<Array<TipoAreaConhecimentoInterface>> {
    return this.http
        .get(this.urlApi + 'v1/tipo/area/conhecimento/')
        .map((response: Response) => {
          return <Array<TipoAreaConhecimentoInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getTipoAreaConhecimentoPorId(id: Guid): Observable<Array<TipoAreaConhecimentoInterface>> {
    return this.http
        .get(this.urlApi + 'v1/tipo/area/conhecimento/' + id.toString())
        .map((response: Response) => {
          return <Array<TipoAreaConhecimentoInterface>>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion

  //#region TipoAreaConhecimentoSubAreas
  getTipoAreaConhecimentoSubAreas(): Observable<Array<TipoAreaConhecimentoSubAreasInterface>> {
    return this.http
        .get(this.urlApi + 'v1/tipo/area/conhecimento/subarea/')
        .map((response: Response) => {
          return <Array<TipoAreaConhecimentoSubAreasInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getTipoAreaConhecimentoSubAreasPorId(id: Guid): Observable<Array<TipoAreaConhecimentoSubAreasInterface>> {
    return this.http
        .get(this.urlApi + 'v1/tipo/area/conhecimento/subarea/' + id.toString())
        .map((response: Response) => {
          return <Array<TipoAreaConhecimentoSubAreasInterface>>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion

  //#region TipoAreaTematica
  getTipoAreaTematica(): Observable<Array<TipoAreaTematicaInterface>> {
    return this.http
        .get(this.urlApi + 'v1/tipo/area/tematica/')
        .map((response: Response) => {
          return <Array<TipoAreaTematicaInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getTipoAreaTematicaPorId(id: Guid): Observable<Array<TipoAreaTematicaInterface>> {
    return this.http
        .get(this.urlApi + 'v1/tipo/area/tematica/' + id.toString())
        .map((response: Response) => {
          return <Array<TipoAreaTematicaInterface>>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion

  //#region TipoAtividade
  getTipoAtividade(): Observable<Array<TipoAtividadeInterface>> {
    return this.http
        .get(this.urlApi + 'v1/tipo/atividade/')
        .map((response: Response) => {
          return <Array<TipoAtividadeInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getTipoAtividadePorId(id: Guid): Observable<Array<TipoAtividadeInterface>> {
    return this.http
        .get(this.urlApi + 'v1/tipo/atividade/' + id.toString())
        .map((response: Response) => {
          return <Array<TipoAtividadeInterface>>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion

  //#region TipoConta
  getTipoConta(): Observable<Array<TipoContaInterface>> {
    return this.http
        .get(this.urlApi + 'v1/tipo/conta/')
        .map((response: Response) => {
          return <Array<TipoContaInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getTipoContaPorId(id: Guid): Observable<Array<TipoContaInterface>> {
    return this.http
        .get(this.urlApi + 'v1/tipo/conta/' + id.toString())
        .map((response: Response) => {
          return <Array<TipoContaInterface>>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion

  //#region TipoCurso
  getTipoCurso(): Observable<Array<TipoCursoInterface>> {
    return this.http
        .get(this.urlApi + 'v1/tipo/curso/')
        .map((response: Response) => {
          return <Array<TipoCursoInterface>>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion

  //#region TipoEquipe
  getTipoEquipe(): Observable<Array<TipoEquipeInterface>> {
    return this.http
        .get(this.urlApi + 'v1/tipo/equipe/')
        .map((response: Response) => {
          return <Array<TipoEquipeInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getTipoEquipePorId(id: Guid): Observable<Array<TipoEquipeInterface>> {
    return this.http
        .get(this.urlApi + 'v1/tipo/equipe/' + id.toString())
        .map((response: Response) => {
          return <Array<TipoEquipeInterface>>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion

  //#region TipoInscricao
  getTipoInscricao(): Observable<Array<TipoInscricaoInterface>> {
    return this.http
        .get(this.urlApi + 'v1/tipo/inscricao/')
        .map((response: Response) => {
          return <Array<TipoInscricaoInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getTipoInscricaoPorId(id: Guid): Observable<Array<TipoInscricaoInterface>> {
    return this.http
        .get(this.urlApi + 'v1/tipo/inscricao/' + id.toString())
        .map((response: Response) => {
          return <Array<TipoInscricaoInterface>>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion

  //#region TipoPublicoAlvo
  getTipoPublicoAlvo(): Observable<Array<TipoPublicoAlvoInterface>> {
    return this.http
        .get(this.urlApi + 'v1/tipo/publico/alvo/')
        .map((response: Response) => {
          return <Array<TipoPublicoAlvoInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getTipoPublicoAlvoPorId(id: Guid): Observable<Array<TipoPublicoAlvoInterface>> {
    return this.http
        .get(this.urlApi + 'v1/tipo/publico/alvo/' + id.toString())
        .map((response: Response) => {
          return <Array<TipoPublicoAlvoInterface>>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion

  //#region TipoResponsabilidadeSocial
  getTipoResponsabilidadeSocial(): Observable<Array<TipoResponsabilidadeSocialInterface>> {
    return this.http
        .get(this.urlApi + 'v1/tipo/responsabilidade/social/')
        .map((response: Response) => {
          return <Array<TipoResponsabilidadeSocialInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getTipoResponsabilidadeSocialPorId(id: Guid): Observable<Array<TipoResponsabilidadeSocialInterface>> {
    return this.http
        .get(this.urlApi + 'v1/tipo/responsabilidade/social/' + id.toString())
        .map((response: Response) => {
          return <Array<TipoResponsabilidadeSocialInterface>>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion

  //#region TipoVinculo
  getTipoVinculo(): Observable<Array<TipoVinculoInterface>> {
    return this.http
        .get(this.urlApi + 'v1/tipo/vinculo/')
        .map((response: Response) => {
          return <Array<TipoVinculoInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getTipoVinculoPorId(id: Guid): Observable<Array<TipoVinculoInterface>> {
    return this.http
        .get(this.urlApi + 'v1/tipo/vinculo/' + id.toString())
        .map((response: Response) => {
          return <Array<TipoVinculoInterface>>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion
  //#region Proposta
  getPropostasLista(usuario: string): Observable<Array<PropostaListaInterface>> {
    return this.http
        .post(this.urlApi + 'v1/propostas/', {usuario: usuario})
        .map((response: Response) => {
          return <Array<PropostaListaInterface>>response.json();
        })
        .catch(this.handleError);
  }
  getProposta(getPropostaModel: GetPropostaModel): Observable<PropostaInterface> {
    return this.http
        .post(this.urlApi + 'v1/proposta/', getPropostaModel)
        .map((response: Response) => {
          return <PropostaInterface>response.json();
        })
        .catch(this.handleError);
  }
  //#endregion
  //#endregion

  //#region Post
  //#endregion

  //#region  Put
  //#endregion

  //#region Delete
  //#endregion
}
