import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ITurma } from 'app/shared/model/turma.model';
import { TurmaService } from './turma.service';

@Component({
    selector: 'jhi-turma-delete-dialog',
    templateUrl: './turma-delete-dialog.component.html'
})
export class TurmaDeleteDialogComponent {
    turma: ITurma;

    constructor(private turmaService: TurmaService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.turmaService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'turmaListModification',
                content: 'Deleted an turma'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-turma-delete-popup',
    template: ''
})
export class TurmaDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ turma }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(TurmaDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
                this.ngbModalRef.componentInstance.turma = turma;
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
