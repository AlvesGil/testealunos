import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IAluno } from 'app/shared/model/aluno.model';
import { AlunoService } from './aluno.service';

@Component({
    selector: 'jhi-aluno-delete-dialog',
    templateUrl: './aluno-delete-dialog.component.html'
})
export class AlunoDeleteDialogComponent {
    aluno: IAluno;

    constructor(private alunoService: AlunoService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.alunoService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'alunoListModification',
                content: 'Deleted an aluno'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-aluno-delete-popup',
    template: ''
})
export class AlunoDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ aluno }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(AlunoDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
                this.ngbModalRef.componentInstance.aluno = aluno;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
