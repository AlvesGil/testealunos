import { ITurma } from 'app/shared/model//turma.model';

export interface IAluno {
    id?: number;
    nome?: string;
    idade?: number;
    turmas?: ITurma[];
}

export class Aluno implements IAluno {
    constructor(public id?: number, public nome?: string, public idade?: number, public turmas?: ITurma[]) {}
}
