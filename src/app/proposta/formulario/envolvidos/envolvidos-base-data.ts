import { Subscription } from "rxjs";

//#region Services
import { ApiExtensaoService } from "../../../services/api-extensao.service";
//#endregion

//#region Interfaces
import { RmPessoaInterface } from "../../../services/interfaces/api-extensao/rm-pessoa.interface";
import { TipoEquipeInterface } from "../../../services/interfaces/api-extensao/tipo-equipe.interface";
import { TipoVinculoInterface } from "../../../services/interfaces/api-extensao/tipo-vinculo.interface";
//#endregion

//#region Models
import { PessoaModel } from "../../../services/models/api-extensao/pessoa.model";
//#endregion

export class EnvolvidosBaseData {
    protected apiExtensaoService: ApiExtensaoService;
    protected subscriptions: Subscription;
    public pessoa: PessoaModel;
    public tiposEquipe: Array<TipoEquipeInterface>;
    public tiposVinculo: Array<TipoVinculoInterface>;
    public rmPessoas: Array<RmPessoaInterface>;

    constructor(apiExtensaoService: ApiExtensaoService){
        this.apiExtensaoService = apiExtensaoService;
        this.subscriptions = new Subscription();
        this.pessoa = new PessoaModel();
        this.getTipoEquipe();
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

    getTipoEquipe(): void {
        this.subscriptions.add(
            this.apiExtensaoService.getTipoEquipe()
            .subscribe(
                response => {
                    this.tiposEquipe = response;
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
                    if(this.tiposVinculo != null && this.tiposVinculo.length > 0)
                        this.pessoa.idTipoVinculo = this.tiposVinculo[0].idTipoVinculo;
                },
                error => console.log('Error :: ' + error)
            )
        );
    }
}
