import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { ITurma } from 'app/shared/model/turma.model';
import { TurmaService } from './turma.service';
import { IAluno } from 'app/shared/model/aluno.model';
import { AlunoService } from 'app/entities/aluno';

@Component({
    selector: 'jhi-turma-update',
    templateUrl: './turma-update.component.html'
})
export class TurmaUpdateComponent implements OnInit {
    turma: ITurma;
    isSaving: boolean;

    alunos: IAluno[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private turmaService: TurmaService,
        private alunoService: AlunoService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ turma }) => {
            this.turma = turma;
        });
        this.alunoService.query().subscribe(
            (res: HttpResponse<IAluno[]>) => {
                this.alunos = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.turma.id !== undefined) {
            this.subscribeToSaveResponse(this.turmaService.update(this.turma));
        } else {
            this.subscribeToSaveResponse(this.turmaService.create(this.turma));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ITurma>>) {
        result.subscribe((res: HttpResponse<ITurma>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackAlunoById(index: number, item: IAluno) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
}
