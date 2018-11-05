import { Guid } from "guid-typescript";
import { PropostaInterface } from "../../interfaces/api-extensao/proposta.interface";
import { PropostaPublicoAlvoInterface } from "../../interfaces/api-extensao/proposta-publico-alvo.interface";
import { TipoEquipePessoaInterface } from "../../interfaces/api-extensao/tipo-equipe-pessoa.interface";
import { CronogramaInterface } from "../../interfaces/api-extensao/cronograma.interface";

export class PropostaModel implements PropostaInterface{
    numeroProposta: number;
    aliasUsuario: string;
    id: Guid;
    versao: number;
    descricaoStatus: string;
    //#region Básico
    vinculadoOutraPrograma: boolean;
    idPropostaVinculada: Guid;
    idTipoAtividade:Guid
    cientePrograma: boolean;
    cienteProjeto: boolean;
    responsabilidadeSocial: boolean;
    idTipoResponsabilidadeSocial: Guid;
    idTipoAreaTematica: Array<Guid>;
    idTipoAreaConhecimento: Guid;
    idTipoAreaConhecimentoSubArea: Array<Guid>;
    titulo: string;
    idTipoCurso: Guid;
    codigoCurso: Array<number>;
    naoSeAplicaVagas: boolean;
    quantidadeVagas: number;
    publicoAlvo: Array<PropostaPublicoAlvoInterface>;
    naoSeAplicaInscricao: boolean;
    idTipoInscricao: Guid;
    justificativaProposta: string;
    objetivos: string;
    descricaoAtivadades: string;
    impactosResultadosEsperados: string;
    formaAvalAcaoExtensao: string;
    vinculoComEnsino: boolean;
    vinculoComPesquisa: boolean;
    //#endregion
    //#region Envolvidos
    equipes: Array<TipoEquipePessoaInterface>;
    //#endregion
    //#region Período / Cronograma
    dataInicio: Date;
    dataTermino: Date;
    cronogramas: Array<CronogramaInterface>;
    //#endregion
    //#region Trajeto / Custos
    //#endregion

    constructor(){
        //#region Básico
        this.vinculadoOutraPrograma = false;
        this.cientePrograma = false;
        this.cienteProjeto = false;
        this.responsabilidadeSocial = false;
        this.idTipoAreaTematica = new Array<Guid>();
        this.idTipoAreaConhecimentoSubArea = new Array<Guid>();
        this.codigoCurso = new Array<number>();
        this.naoSeAplicaVagas = true;
        this.naoSeAplicaInscricao = true;
        this.publicoAlvo = new Array<PropostaPublicoAlvoInterface>();
        this.vinculoComEnsino = false;
        this.vinculoComPesquisa = false;
        //#endregion
        //#region Envolvidos
        this.equipes = new Array<TipoEquipePessoaInterface>();
        //#region Período / Cronograma
        this.dataInicio = null;
        this.dataTermino = null;
        this.cronogramas = Array<CronogramaInterface>();
        //#endregion
        //#region Trajeto / Custos
        //#endregion
    }
}