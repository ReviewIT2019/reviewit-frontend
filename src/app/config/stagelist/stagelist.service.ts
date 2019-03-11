
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { ApiHelper } from '../../shared';
import { StageDetailsDTO } from '../../model/models';

@Injectable()
export class StagelistService {
    
    constructor(
        private apiHelper: ApiHelper,
        private http: HttpClient
    ) { }

    public get(studyId: number): Observable<StageDetailsDTO[]> {
        let url = `${environment.api}study/${studyId}/stages`;
        return this.http.get<StageDetailsDTO[]>(url, this.apiHelper.JsonOptions())
            .catch(this.apiHelper.handleError);
    }

    public create(studyId: number, dto: StageDetailsDTO): Observable<number> {
        let url = `${environment.api}study/${studyId}/stage`;
        let body = JSON.stringify(dto);
        return this.http.post<number>(url, dto, this.apiHelper.JsonOptions())
            .catch(this.apiHelper.handleError);
    }

    

}
