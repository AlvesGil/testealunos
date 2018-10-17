import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IAluno } from 'app/shared/model/aluno.model';

@Component({
    selector: 'jhi-aluno-detail',
    templateUrl: './aluno-detail.component.html'
})
export class AlunoDetailComponent implements OnInit {
    aluno: IAluno;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ aluno }) => {
            this.aluno = aluno;
        });
    }

    previousState() {
        window.history.back();
    }
}
