// Services
import { ApiExtensaoService } from '../services/api-extensao.service';
// Interfaces
import { BancoInterface } from '../services/interfaces/api-extensao/banco.interface';
import { ConfiguracaoGeralInterface } from '../services/interfaces/api-extensao/configuracao-geral.interface';
import { CursoInterface } from '../services/interfaces/api-extensao/curso.interface';
import { CustoRecursosHumanosFormaPgtoAnexosInterface } from '../services/interfaces/api-extensao/custo-recursos-humanos-forma-pgto-anexos.interface';
import { CustoRecursosHumanosOpcoesInterface } from '../services/interfaces/api-extensao/custo-recursos-humanos-opcoes.interface';
import { CustoRecursosHumanosOpcoesValorFixoEspecialInterface } from '../services/interfaces/api-extensao/custo-recursos-humanos-opcoes-valor-fixo-especial.interface';
import { CustoRecursosHumanosPessoalExternoFormaPgtoInterface } from '../services/interfaces/api-extensao/custo-recursos-humanos-pessoal-externo-forma-pgto.interface';
import { CustoRecursosHumanosPessoalExternoOpcoesInterface } from '../services/interfaces/api-extensao/custo-recursos-humanos-pessoal-externo-opcoes.interface';
import { DespesasMarketingItensInterface } from '../services/interfaces/api-extensao/despesas-marketing-itens.interface';
import { DespesasViagemItensInterface } from '../services/interfaces/api-extensao/despesas-viagem-itens.interface';
import { DespesasViagemResponsaveisCompraInterface } from '../services/interfaces/api-extensao/despesas-viagem-responsaveis-compra.interface';
import { OutrasDespesasItensInterface } from '../services/interfaces/api-extensao/outras-despesas-itens.interface';
import { ReceitaItensInterface } from '../services/interfaces/api-extensao/receita-itens.interface';
import { TipoAreaConhecimentoInterface } from '../services/interfaces/api-extensao/tipo-area-conhecimento.interface';
import { TipoAreaConhecimentoSubAreasInterface } from '../services/interfaces/api-extensao/tipo-area-conhecimento-sub-areas.interface';
import { TipoAreaTematicaInterface } from '../services/interfaces/api-extensao/tipo-area-tematica.interface';
import { TipoAtividadeInterface } from '../services/interfaces/api-extensao/tipo-atividade.interface';
import { TipoContaInterface } from '../services/interfaces/api-extensao/tipo-conta.interface';
import { TipoEquipeInterface } from '../services/interfaces/api-extensao/tipo-equipe.interface';
import { TipoInscricaoInterface } from '../services/interfaces/api-extensao/tipo-inscricao.interface';
import { TipoPublicoAlvoInterface } from '../services/interfaces/api-extensao/tipo-publico-alvo.interface';
import { TipoResponsabilidadeSocialInterface } from '../services/interfaces/api-extensao/tipo-responsabilidade-social.interface';
import { TipoVinculoInterface } from '../services/interfaces/api-extensao/tipo-vinculo.interface';

export class PropostaBaseData {
    protected apiExtensaoService;
    protected bancos: Array<BancoInterface>;
    protected configuracaoGera: Array<ConfiguracaoGeralInterface>;
    protected cursos: Array<CursoInterface>;
    protected custoRecursosHumanosFormaPgtoAnexos: Array<CustoRecursosHumanosFormaPgtoAnexosInterface>;
    protected custoRecursosHumanosOpcoes: Array<CustoRecursosHumanosOpcoesInterface>;
    protected custoRecursosHumanosOpcoesValorFixoEspecial: Array<CustoRecursosHumanosOpcoesValorFixoEspecialInterface>;
    protected custoRecursosHumanosPessoalExternoFormaPgto: Array<CustoRecursosHumanosPessoalExternoFormaPgtoInterface>;
    protected custoRecursosHumanosPessoalExternoOpcoes: Array<CustoRecursosHumanosPessoalExternoOpcoesInterface>;
    protected despesasMarketingItens: Array<DespesasMarketingItensInterface>;
    protected despesasViagemItens: Array<DespesasViagemItensInterface>;
    protected despesasViagemResponsaveisCompra: Array<DespesasViagemResponsaveisCompraInterface>;
    protected outrasDespesasItens: Array<OutrasDespesasItensInterface>;
    protected receitaItens: Array<ReceitaItensInterface>;
    protected tipoAreaConhecimento: Array<TipoAreaConhecimentoInterface>;
    protected tipoAreaConhecimentoSubAreas: Array<TipoAreaConhecimentoSubAreasInterface>;
    protected tipoAreaTematica: Array<TipoAreaTematicaInterface>;
    protected tipoAtividade: Array<TipoAtividadeInterface>;
    protected tipoConta: Array<TipoContaInterface>;
    protected tipoCurso: Array<{codigoTipoCurso: number, descricaoTipoCurso: string}> = new Array<{codigoTipoCurso: number, descricaoTipoCurso: string}>();
    protected tipoEquipe: Array<TipoEquipeInterface>;
    protected tipoInscricao: Array<TipoInscricaoInterface>;
    protected tipoPublicoAlvo: Array<TipoPublicoAlvoInterface>;
    protected tipoResponsabilidadeSocial: Array<TipoResponsabilidadeSocialInterface>;
    protected tipoVinculo: Array<TipoVinculoInterface>;

    constructor(apiExtensaoService:ApiExtensaoService){
        this.apiExtensaoService = apiExtensaoService;
        this.getBancos();
        this.getConfiguracaoGeral();
        this.getCursosPorTipos('3;6');
        this.getCustoRecursosHumanosFormaPgtoAnexos();
        this.getCustoRecursosHumanosOpcoes();
        this.getCustoRecursosHumanosOpcoesValorFixoEspecial();
        this.getCustoRecursosHumanosPessoalExternoFormaPgto();
        this.getCustoRecursosHumanosPessoalExternoOpcoes();
        this.getDespesasMarketingItens();
        this.getDespesasViagemItens();
        this.getDespesasViagemResponsaveisCompra();
        this.getOutrasDespesasItens();
        this.getReceitaItens();
        this.getTipoAreaConhecimento();
        this.getTipoAreaConhecimentoSubAreas();
        this.getTipoAreaTematica();
        this.getTipoAtividade();
        this.getTipoConta();
        this.tipoCurso.push({codigoTipoCurso: 3, descricaoTipoCurso:'Graduação'});
        this.tipoCurso.push({codigoTipoCurso: 6, descricaoTipoCurso:'Pós-Graduação'});
        this.getTipoEquipe();
        this.getTipoInscricao();
        this.getTipoPublicoAlvo();
        this.getTipoResponsabilidadeSocial();
        this.getTipoVinculo();
    }

    getBancos(): void {
        this.apiExtensaoService.getBancos()
        .subscribe(
            response => {
                this.bancos = response;
            },
            error => console.log('Error :: ' + error)
        )
    }

    getConfiguracaoGeral(): void {
        this.apiExtensaoService.getConfiguracaoGeral()
        .subscribe(
            response => {
                this.configuracaoGera = response;
            },
            error => console.log('Error :: ' + error)
        )
    }

    getCursosPorTipos(codigosTipoCurso: string): void {
        this.apiExtensaoService.getCursosPorTipos(codigosTipoCurso)
        .subscribe(
            response => {
                this.cursos = response;
            },
            error => console.log('Error :: ' + error)
        )
    }
    
    getCustoRecursosHumanosFormaPgtoAnexos(): void {
        this.apiExtensaoService.getCustoRecursosHumanosFormaPgtoAnexos()
        .subscribe(
            response => {
                this.custoRecursosHumanosFormaPgtoAnexos = response;
            },
            error => console.log('Error :: ' + error)
        )
    }

    getCustoRecursosHumanosOpcoes(): void {
        this.apiExtensaoService.getCustoRecursosHumanosOpcoes()
        .subscribe(
            response => {
                this.custoRecursosHumanosOpcoes = response;
            },
            error => console.log('Error :: ' + error)
        )
    }

    getCustoRecursosHumanosOpcoesValorFixoEspecial(): void {
        this.apiExtensaoService.getCustoRecursosHumanosOpcoesValorFixoEspecial()
        .subscribe(
            response => {
                this.custoRecursosHumanosOpcoesValorFixoEspecial = response;
            },
            error => console.log('Error :: ' + error)
        )
    }
    
    getCustoRecursosHumanosPessoalExternoFormaPgto(): void {
        this.apiExtensaoService.getCustoRecursosHumanosPessoalExternoFormaPgto()
        .subscribe(
            response => {
                this.custoRecursosHumanosPessoalExternoFormaPgto = response;
            },
            error => console.log('Error :: ' + error)
        )
    }

    getCustoRecursosHumanosPessoalExternoOpcoes(): void {
        this.apiExtensaoService.getCustoRecursosHumanosPessoalExternoOpcoes()
        .subscribe(
            response => {
                this.custoRecursosHumanosPessoalExternoOpcoes = response;
            },
            error => console.log('Error :: ' + error)
        )
    }

    getDespesasMarketingItens(): void {
        this.apiExtensaoService.getDespesasMarketingItens()
        .subscribe(
            response => {
                this.despesasMarketingItens = response;
            },
            error => console.log('Error :: ' + error)
        )
    }

    getDespesasViagemItens(): void {
        this.apiExtensaoService.getDespesasViagemItens()
        .subscribe(
            response => {
                this.despesasViagemItens = response;
            },
            error => console.log('Error :: ' + error)
        )
    }

    getDespesasViagemResponsaveisCompra(): void {
        this.apiExtensaoService.getDespesasViagemResponsaveisCompra()
        .subscribe(
            response => {
                this.despesasViagemResponsaveisCompra = response;
            },
            error => console.log('Error :: ' + error)
        )
    }

    getOutrasDespesasItens(): void {
        this.apiExtensaoService.getOutrasDespesasItens()
        .subscribe(
            response => {
                this.outrasDespesasItens = response;
            },
            error => console.log('Error :: ' + error)
        )
    }

    getReceitaItens(): void {
        this.apiExtensaoService.getReceitaItens()
        .subscribe(
            response => {
                this.receitaItens = response;
            },
            error => console.log('Error :: ' + error)
        )
    }

    getTipoAreaConhecimento(): void {
        this.apiExtensaoService.getTipoAreaConhecimento()
        .subscribe(
            response => {
                this.tipoAreaConhecimento = response;
            },
            error => console.log('Error :: ' + error)
        )
    }

    getTipoAreaConhecimentoSubAreas(): void {
        this.apiExtensaoService.getTipoAreaConhecimentoSubAreas()
        .subscribe(
            response => {
                this.tipoAreaConhecimentoSubAreas = response;
            },
            error => console.log('Error :: ' + error)
        )
    }

    getTipoAreaTematica(): void {
        this.apiExtensaoService.getTipoAreaTematica()
        .subscribe(
            response => {
                this.tipoAreaTematica = response;
            },
            error => console.log('Error :: ' + error)
        )
    }
    
    getTipoAtividade(): void {
        this.apiExtensaoService.getTipoAtividade()
        .subscribe(
            response => {
                this.tipoAtividade = response;
            },
            error => console.log('Error :: ' + error)
        )
    }
    
    getTipoConta(): void {
        this.apiExtensaoService.getTipoConta()
        .subscribe(
            response => {
                this.tipoConta = response;
            },
            error => console.log('Error :: ' + error)
        )
    }
    
    getTipoEquipe(): void {
        this.apiExtensaoService.getTipoEquipe()
        .subscribe(
            response => {
                this.tipoEquipe = response;
            },
            error => console.log('Error :: ' + error)
        )
    }

    getTipoInscricao(): void {
        this.apiExtensaoService.getTipoInscricao()
        .subscribe(
            response => {
                this.tipoInscricao = response;
            },
            error => console.log('Error :: ' + error)
        )
    }
    
    getTipoPublicoAlvo(): void {
        this.apiExtensaoService.getTipoPublicoAlvo()
        .subscribe(
            response => {
                this.tipoPublicoAlvo = response;
            },
            error => console.log('Error :: ' + error)
        )
    }
    
    getTipoResponsabilidadeSocial(): void {
        this.apiExtensaoService.getTipoResponsabilidadeSocial()
        .subscribe(
            response => {
                this.tipoResponsabilidadeSocial = response;
            },
            error => console.log('Error :: ' + error)
        )
    }

    getTipoVinculo(): void {
        this.apiExtensaoService.getTipoVinculo()
        .subscribe(
            response => {
                this.tipoVinculo = response;
            },
            error => console.log('Error :: ' + error)
        )
    }
}