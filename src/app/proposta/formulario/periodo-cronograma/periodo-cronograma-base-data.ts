import { Subscription } from "rxjs";

//#region Services
import { ApiExtensaoService } from "../../../services/api-extensao.service";
//#endregion

//#region Interfaces
import { TipoVinculoInterface } from "../../../services/interfaces/api-extensao/tipo-vinculo.interface";
import { RmPessoaInterface } from "../../../services/interfaces/api-extensao/rm-pessoa.interface";
import { Guid } from "guid-typescript";
//#endregion

export class PeriodoCronogramaBaseData {
    protected apiExtensaoService: ApiExtensaoService;
    protected subscriptions: Subscription;
    public tiposVinculo: Array<TipoVinculoInterface>;
    public rmPessoas: Array<RmPessoaInterface>;
    public idTipoVinculo: Guid = null;

    constructor(apiExtensaoService: ApiExtensaoService){
        this.apiExtensaoService = apiExtensaoService;
        this.subscriptions = new Subscription();
        this.getTipoVinculo();
        this.getRmPessoasEnvolvidos();
    }

    getRmPessoasEnvolvidos(): void{
        this.subscriptions.add(
            this.apiExtensaoService.getRmPessoasEnvolvidos()
            .subscribe(
                response => {
                    this.rmPessoas = response;
                },
                error => console.log('Error :: ' + error)
            )
        );
    }

    getTipoVinculo(): void {
        this.subscriptions.add(
            this.apiExtensaoService.getTipoVinculo()
            .subscribe(
                response => {
                    this.tiposVinculo = response.reverse();
                    if(this.tiposVinculo.length > 0){
                        this.idTipoVinculo = this.tiposVinculo[0].idTipoVinculo;
                    }
                },
                error => console.log('Error :: ' + error)
            )
        );
    }
}
