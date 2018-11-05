import { IOption } from "ng-select";
import { Subscription } from "rxjs";

//#region Services
import { ApiExtensaoService } from "../../../services/api-extensao.service";
//#endregion

//#region Interfaces
import { CursoInterface } from "../../../services/interfaces/api-extensao/curso.interface";
import { TipoAreaConhecimentoInterface } from "../../../services/interfaces/api-extensao/tipo-area-conhecimento.interface";
import { TipoAreaConhecimentoSubAreasInterface } from "../../../services/interfaces/api-extensao/tipo-area-conhecimento-sub-areas.interface";
import { TipoAreaTematicaInterface } from "../../../services/interfaces/api-extensao/tipo-area-tematica.interface";
import { TipoAtividadeInterface } from "../../../services/interfaces/api-extensao/tipo-atividade.interface";
import { TipoCursoInterface } from "../../../services/interfaces/api-extensao/tipo-curso.interface";
import { TipoPublicoAlvoInterface } from "../../../services/interfaces/api-extensao/tipo-publico-alvo.interface";
import { TipoInscricaoInterface } from "../../../services/interfaces/api-extensao/tipo-inscricao.interface";
import { TipoResponsabilidadeSocialInterface } from "../../../services/interfaces/api-extensao/tipo-responsabilidade-social.interface";
//#endregion

export class BasicoBaseData {
    protected apiExtensaoService;
    protected subscriptions: Subscription;
    public cursos: Array<CursoInterface>;
    public tipoAreaConhecimento: Array<TipoAreaConhecimentoInterface>;
    public tipoAreaConhecimentoSubAreas: Array<TipoAreaConhecimentoSubAreasInterface>;
    public tipoAreaTematica: Array<TipoAreaTematicaInterface>;
    public tipoAtividade: Array<TipoAtividadeInterface>;
    public tipoCurso: Array<TipoCursoInterface>;
    public tipoInscricao: Array<TipoInscricaoInterface>;
    public tipoPublicoAlvo: Array<TipoPublicoAlvoInterface>;
    public tipoResponsabilidadeSocial: Array<TipoResponsabilidadeSocialInterface>;

    public optionsTipoAreaTematica: Array<IOption> = new Array<IOption>();
    public optionsCurso: Array<IOption> = new Array<IOption>();
    public optionsPublicoAlvo: Array<IOption> = new Array<IOption>();

    constructor(apiExtensaoService: ApiExtensaoService){
        this.apiExtensaoService = apiExtensaoService;
        this.subscriptions = new Subscription();
        this.getTipoAreaConhecimento();
        this.getTipoAreaConhecimentoSubAreas();
        this.getTipoAreaTematica();
        this.getTipoAtividade();
        this.getTipoInscricao();
        this.getTipoPublicoAlvo();
        this.getTipoResponsabilidadeSocial();
    }

    getCursosPorTipos(codigosTipoCurso: string): void {
        this.subscriptions.add(
            this.apiExtensaoService.getCursosPorTipos(codigosTipoCurso)
            .subscribe(
                response => {
                    this.cursos = response;
                    for(let item of this.cursos){
                        this.optionsCurso.push({value: item.codigoCurso.toString(), label: item.descricaoCursoReduz});
                    }
                },
                error => console.log('Error :: ' + error)
            )
        );
    }

    getTipoAreaConhecimento(): void {
        this.subscriptions.add(
            this.apiExtensaoService.getTipoAreaConhecimento()
            .subscribe(
                response => {
                    this.tipoAreaConhecimento = response;
                },
                error => console.log('Error :: ' + error)
            )
        );
    }

    getTipoAreaConhecimentoSubAreas(): void {
        this.subscriptions.add(
            this.apiExtensaoService.getTipoAreaConhecimentoSubAreas()
            .subscribe(
                response => {
                    this.tipoAreaConhecimentoSubAreas = response;
                },
                error => console.log('Error :: ' + error)
            )
        );
    }

    getTipoAreaTematica(): void {
        this.subscriptions.add(
            this.apiExtensaoService.getTipoAreaTematica()
            .subscribe(
                response => {
                    this.tipoAreaTematica = response;
                    for(let item of this.tipoAreaTematica){
                        this.optionsTipoAreaTematica.push({value: item.idTipoAreaTematica.toString(), label: item.descricaoTipoAreaTematica});
                    }
                },
                error => console.log('Error :: ' + error)
            )
        );
    }

    getTipoAtividade(): void {
        this.subscriptions.add(
            this.apiExtensaoService.getTipoAtividade()
            .subscribe(
                response => {
                    this.tipoAtividade = response;
                },
                error => console.log('Error :: ' + error)
            )
        );
    }

    getTipoInscricao(): void {
        this.subscriptions.add(
            this.apiExtensaoService.getTipoInscricao()
            .subscribe(
                response => {
                    this.tipoInscricao = response;
                },
                error => console.log('Error :: ' + error)
            )
        );
    }

    getTipoPublicoAlvo(): void {
        this.subscriptions.add(
            this.apiExtensaoService.getTipoPublicoAlvo()
            .subscribe(
                response => {
                    this.tipoPublicoAlvo = response;
                    for(let item of this.tipoPublicoAlvo){
                        this.optionsPublicoAlvo.push({value: item.idTipoPublicoAlvo.toString(), label: item.descricaoTipoPublicoAlvo});
                    }
                    
                },
                error => console.log('Error :: ' + error)
            )
        );
    }

    getTipoResponsabilidadeSocial(): void {
        this.subscriptions.add(
            this.apiExtensaoService.getTipoResponsabilidadeSocial()
            .subscribe(
                response => {
                    this.tipoResponsabilidadeSocial = response;
                },
                error => console.log('Error :: ' + error)
            )
        );
    }
}
