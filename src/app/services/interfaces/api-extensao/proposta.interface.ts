import { Guid } from "guid-typescript";
import { PropostaPublicoAlvoInterface } from "./proposta-publico-alvo.interface";
import { TipoEquipePessoaInterface } from "./tipo-equipe-pessoa.interface";
import { CronogramaInterface } from "./cronograma.interface";

export interface PropostaInterface {
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
}
