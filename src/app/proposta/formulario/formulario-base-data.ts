//#region Services
import { ApiExtensaoService } from "../../services/api-extensao.service";
//#endregion

//#region Interface
import { ConfiguracaoGeralInterface } from "../../services/interfaces/api-extensao/configuracao-geral.interface";
//#endregion

export class FormularioBaseData {
    protected apiExtensaoService:ApiExtensaoService;
    public configuracaoGera: ConfiguracaoGeralInterface;

    constructor(apiExtensaoService:ApiExtensaoService){
        this.apiExtensaoService = apiExtensaoService;
        this.getConfiguracaoGeral();
    }

    getConfiguracaoGeral(): void {
        this.apiExtensaoService.getConfiguracaoGeral()
        .subscribe(
            response => {
                this.configuracaoGera = response;
            },
            error => console.log('Error :: ' + error)
        );
    }
}
