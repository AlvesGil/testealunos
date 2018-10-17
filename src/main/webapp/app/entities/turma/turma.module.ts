import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestealunosSharedModule } from 'app/shared';
import {
    TurmaComponent,
    TurmaDetailComponent,
    TurmaUpdateComponent,
    TurmaDeletePopupComponent,
    TurmaDeleteDialogComponent,
    turmaRoute,
    turmaPopupRoute
} from './';

const ENTITY_STATES = [...turmaRoute, ...turmaPopupRoute];

@NgModule({
    imports: [TestealunosSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [TurmaComponent, TurmaDetailComponent, TurmaUpdateComponent, TurmaDeleteDialogComponent, TurmaDeletePopupComponent],
    entryComponents: [TurmaComponent, TurmaUpdateComponent, TurmaDeleteDialogComponent, TurmaDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestealunosTurmaModule {}
