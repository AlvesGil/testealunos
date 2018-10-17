import { IAluno } from 'app/shared/model//aluno.model';

export const enum TipoTurma {
    BASICO = 'BASICO',
    MEDIO = 'MEDIO',
    SUPERIOR = 'SUPERIOR'
}

export interface ITurma {
    id?: number;
    nome?: string;
    cod?: string;
    tipo?: TipoTurma;
    alunos?: IAluno[];
}

export class Turma implements ITurma {
    constructor(public id?: number, public nome?: string, public cod?: string, public tipo?: TipoTurma, public alunos?: IAluno[]) {}
}
