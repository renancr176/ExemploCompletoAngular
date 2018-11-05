import { Subscription } from "rxjs";

//#region Services
import { ApiExtensaoService } from "../../../services/api-extensao.service";
//#endregion

//#region Interfaces
import { BancoInterface } from "../../../services/interfaces/api-extensao/banco.interface";
import { CustoRecursosHumanosFormaPgtoAnexosInterface } from "../../../services/interfaces/api-extensao/custo-recursos-humanos-forma-pgto-anexos.interface";
import { CustoRecursosHumanosOpcoesInterface } from "../../../services/interfaces/api-extensao/custo-recursos-humanos-opcoes.interface";
import { CustoRecursosHumanosOpcoesValorFixoEspecialInterface } from "../../../services/interfaces/api-extensao/custo-recursos-humanos-opcoes-valor-fixo-especial.interface";
import { CustoRecursosHumanosPessoalExternoFormaPgtoInterface } from "../../../services/interfaces/api-extensao/custo-recursos-humanos-pessoal-externo-forma-pgto.interface";
import { CustoRecursosHumanosPessoalExternoOpcoesInterface } from "../../../services/interfaces/api-extensao/custo-recursos-humanos-pessoal-externo-opcoes.interface";
import { DespesasMarketingItensInterface } from "../../../services/interfaces/api-extensao/despesas-marketing-itens.interface";
import { DespesasViagemItensInterface } from "../../../services/interfaces/api-extensao/despesas-viagem-itens.interface";
import { DespesasViagemResponsaveisCompraInterface } from "../../../services/interfaces/api-extensao/despesas-viagem-responsaveis-compra.interface";
import { OutrasDespesasItensInterface } from "../../../services/interfaces/api-extensao/outras-despesas-itens.interface";
import { ReceitaItensInterface } from "../../../services/interfaces/api-extensao/receita-itens.interface";
import { TipoContaInterface } from "../../../services/interfaces/api-extensao/tipo-conta.interface";
//#endregion

export class TrajetoCustosBaseData {
    protected apiExtensaoService: ApiExtensaoService;
    protected subscriptions: Subscription;
    public bancos: Array<BancoInterface>;
    public custoRecursosHumanosFormaPgtoAnexos: Array<CustoRecursosHumanosFormaPgtoAnexosInterface>;
    public custoRecursosHumanosOpcoes: Array<CustoRecursosHumanosOpcoesInterface>;
    public custoRecursosHumanosOpcoesValorFixoEspecial: Array<CustoRecursosHumanosOpcoesValorFixoEspecialInterface>;
    public custoRecursosHumanosPessoalExternoFormaPgto: Array<CustoRecursosHumanosPessoalExternoFormaPgtoInterface>;
    public custoRecursosHumanosPessoalExternoOpcoes: Array<CustoRecursosHumanosPessoalExternoOpcoesInterface>;
    public despesasMarketingItens: Array<DespesasMarketingItensInterface>;
    public despesasViagemItens: Array<DespesasViagemItensInterface>;
    public despesasViagemResponsaveisCompra: Array<DespesasViagemResponsaveisCompraInterface>;
    public outrasDespesasItens: Array<OutrasDespesasItensInterface>;
    public receitaItens: Array<ReceitaItensInterface>;
    public tipoConta: Array<TipoContaInterface>;
    
    constructor(apiExtensaoService: ApiExtensaoService){
        this.apiExtensaoService = apiExtensaoService;
        this.subscriptions = new Subscription();
        this.getBancos();
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
    }

    getBancos(): void {
        this.subscriptions.add(
            this.apiExtensaoService.getBancos()
            .subscribe(
                response => {
                    this.bancos = response;
                },
                error => console.log('Error :: ' + error)
            )
        );
    }

    getCustoRecursosHumanosFormaPgtoAnexos(): void {
        this.subscriptions.add(
            this.apiExtensaoService.getCustoRecursosHumanosFormaPgtoAnexos()
            .subscribe(
                response => {
                    this.custoRecursosHumanosFormaPgtoAnexos = response;
                },
                error => console.log('Error :: ' + error)
            )
        );
    }

    getCustoRecursosHumanosOpcoes(): void {
        this.subscriptions.add(
            this.apiExtensaoService.getCustoRecursosHumanosOpcoes()
            .subscribe(
                response => {
                    this.custoRecursosHumanosOpcoes = response;
                },
                error => console.log('Error :: ' + error)
            )
        );
    }
    
    getCustoRecursosHumanosOpcoesValorFixoEspecial(): void {
        this.subscriptions.add(
            this.apiExtensaoService.getCustoRecursosHumanosOpcoesValorFixoEspecial()
            .subscribe(
                response => {
                    this.custoRecursosHumanosOpcoesValorFixoEspecial = response;
                },
                error => console.log('Error :: ' + error)
            )
        );
    }
    
    getCustoRecursosHumanosPessoalExternoFormaPgto(): void {
        this.subscriptions.add(
            this.apiExtensaoService.getCustoRecursosHumanosPessoalExternoFormaPgto()
            .subscribe(
                response => {
                    this.custoRecursosHumanosPessoalExternoFormaPgto = response;
                },
                error => console.log('Error :: ' + error)
            )
        );
    }
    
    getCustoRecursosHumanosPessoalExternoOpcoes(): void {
        this.subscriptions.add(
            this.apiExtensaoService.getCustoRecursosHumanosPessoalExternoOpcoes()
            .subscribe(
                response => {
                    this.custoRecursosHumanosPessoalExternoOpcoes = response;
                },
                error => console.log('Error :: ' + error)
            )
        );
    }
    
    getDespesasMarketingItens(): void {
        this.subscriptions.add(
            this.apiExtensaoService.getDespesasMarketingItens()
            .subscribe(
                response => {
                    this.despesasMarketingItens = response;
                },
                error => console.log('Error :: ' + error)
            )
        );
    }
    
    getDespesasViagemItens(): void {
        this.subscriptions.add(
            this.apiExtensaoService.getDespesasViagemItens()
            .subscribe(
                response => {
                    this.despesasViagemItens = response;
                },
                error => console.log('Error :: ' + error)
            )
        );
    }
    
    getDespesasViagemResponsaveisCompra(): void {
        this.subscriptions.add(
            this.apiExtensaoService.getDespesasViagemResponsaveisCompra()
            .subscribe(
                response => {
                    this.despesasViagemResponsaveisCompra = response;
                },
                error => console.log('Error :: ' + error)
            )
        );
    }
    
    getOutrasDespesasItens(): void {
        this.subscriptions.add(
            this.apiExtensaoService.getOutrasDespesasItens()
            .subscribe(
                response => {
                    this.outrasDespesasItens = response;
                },
                error => console.log('Error :: ' + error)
            )
        );
    }
    
    getReceitaItens(): void {
        this.subscriptions.add(
            this.apiExtensaoService.getReceitaItens()
            .subscribe(
                response => {
                    this.receitaItens = response;
                },
                error => console.log('Error :: ' + error)
            )
        );
    }
}
