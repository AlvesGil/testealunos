/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { TestealunosTestModule } from '../../../test.module';
import { TurmaUpdateComponent } from 'app/entities/turma/turma-update.component';
import { TurmaService } from 'app/entities/turma/turma.service';
import { Turma } from 'app/shared/model/turma.model';

describe('Component Tests', () => {
    describe('Turma Management Update Component', () => {
        let comp: TurmaUpdateComponent;
        let fixture: ComponentFixture<TurmaUpdateComponent>;
        let service: TurmaService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [TestealunosTestModule],
                declarations: [TurmaUpdateComponent]
            })
                .overrideTemplate(TurmaUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(TurmaUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TurmaService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Turma(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.turma = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Turma();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.turma = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
