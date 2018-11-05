export interface FluxoAprovacaoInterface {
    fase: number;
    idTipoEtapas: number;
    descricaoEtapa: string;
    idStatus: number;
    descricaoStatus: string;
    ordem: number;
    condicaoCusto: boolean;
    idTipoEtapasSeguinte: number;
    descricaoEtapaSeguinte: string;
    idStatusSeguinte: number;
    descricaoStatusSeguinte: string;
    criado: Date;
    criadoPor: string;
    alterado: Date;
    alteradoPor: string;
}
