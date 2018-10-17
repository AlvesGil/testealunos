/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { TestealunosTestModule } from '../../../test.module';
import { TurmaDetailComponent } from 'app/entities/turma/turma-detail.component';
import { Turma } from 'app/shared/model/turma.model';

describe('Component Tests', () => {
    describe('Turma Management Detail Component', () => {
        let comp: TurmaDetailComponent;
        let fixture: ComponentFixture<TurmaDetailComponent>;
        const route = ({ data: of({ turma: new Turma(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [TestealunosTestModule],
                declarations: [TurmaDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(TurmaDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(TurmaDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.turma).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
