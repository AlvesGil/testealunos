/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { TestealunosTestModule } from '../../../test.module';
import { AlunoDetailComponent } from 'app/entities/aluno/aluno-detail.component';
import { Aluno } from 'app/shared/model/aluno.model';

describe('Component Tests', () => {
    describe('Aluno Management Detail Component', () => {
        let comp: AlunoDetailComponent;
        let fixture: ComponentFixture<AlunoDetailComponent>;
        const route = ({ data: of({ aluno: new Aluno(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [TestealunosTestModule],
                declarations: [AlunoDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(AlunoDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(AlunoDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.aluno).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
