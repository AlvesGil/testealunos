/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { TestealunosTestModule } from '../../../test.module';
import { TurmaComponent } from 'app/entities/turma/turma.component';
import { TurmaService } from 'app/entities/turma/turma.service';
import { Turma } from 'app/shared/model/turma.model';

describe('Component Tests', () => {
    describe('Turma Management Component', () => {
        let comp: TurmaComponent;
        let fixture: ComponentFixture<TurmaComponent>;
        let service: TurmaService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [TestealunosTestModule],
                declarations: [TurmaComponent],
                providers: []
            })
                .overrideTemplate(TurmaComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(TurmaComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TurmaService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Turma(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.turmas[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
