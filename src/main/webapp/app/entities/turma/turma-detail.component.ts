import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITurma } from 'app/shared/model/turma.model';

@Component({
    selector: 'jhi-turma-detail',
    templateUrl: './turma-detail.component.html'
})
export class TurmaDetailComponent implements OnInit {
    turma: ITurma;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ turma }) => {
            this.turma = turma;
        });
    }

    previousState() {
        window.history.back();
    }
}
