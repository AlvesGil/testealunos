import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ITurma } from 'app/shared/model/turma.model';

type EntityResponseType = HttpResponse<ITurma>;
type EntityArrayResponseType = HttpResponse<ITurma[]>;

@Injectable({ providedIn: 'root' })
export class TurmaService {
    public resourceUrl = SERVER_API_URL + 'api/turmas';

    constructor(private http: HttpClient) {}

    create(turma: ITurma): Observable<EntityResponseType> {
        return this.http.post<ITurma>(this.resourceUrl, turma, { observe: 'response' });
    }

    update(turma: ITurma): Observable<EntityResponseType> {
        return this.http.put<ITurma>(this.resourceUrl, turma, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ITurma>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ITurma[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
