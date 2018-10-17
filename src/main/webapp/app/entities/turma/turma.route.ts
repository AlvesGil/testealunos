import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Turma } from 'app/shared/model/turma.model';
import { TurmaService } from './turma.service';
import { TurmaComponent } from './turma.component';
import { TurmaDetailComponent } from './turma-detail.component';
import { TurmaUpdateComponent } from './turma-update.component';
import { TurmaDeletePopupComponent } from './turma-delete-dialog.component';
import { ITurma } from 'app/shared/model/turma.model';

@Injectable({ providedIn: 'root' })
export class TurmaResolve implements Resolve<ITurma> {
    constructor(private service: TurmaService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((turma: HttpResponse<Turma>) => turma.body));
        }
        return of(new Turma());
    }
}

export const turmaRoute: Routes = [
    {
        path: 'turma',
        component: TurmaComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Turmas'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'turma/:id/view',
        component: TurmaDetailComponent,
        resolve: {
            turma: TurmaResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Turmas'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'turma/new',
        component: TurmaUpdateComponent,
        resolve: {
            turma: TurmaResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Turmas'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'turma/:id/edit',
        component: TurmaUpdateComponent,
        resolve: {
            turma: TurmaResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Turmas'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const turmaPopupRoute: Routes = [
    {
        path: 'turma/:id/delete',
        component: TurmaDeletePopupComponent,
        resolve: {
            turma: TurmaResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Turmas'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
