import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IAluno } from 'app/shared/model/aluno.model';

type EntityResponseType = HttpResponse<IAluno>;
type EntityArrayResponseType = HttpResponse<IAluno[]>;

@Injectable({ providedIn: 'root' })
export class AlunoService {
    public resourceUrl = SERVER_API_URL + 'api/alunos';

    constructor(private http: HttpClient) {}

    create(aluno: IAluno): Observable<EntityResponseType> {
        return this.http.post<IAluno>(this.resourceUrl, aluno, { observe: 'response' });
    }

    update(aluno: IAluno): Observable<EntityResponseType> {
        return this.http.put<IAluno>(this.resourceUrl, aluno, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IAluno>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IAluno[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
