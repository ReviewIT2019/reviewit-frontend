import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import {Observable, of, from } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ApiHelper } from '../../shared'
import { environment } from '../../../environments/environment'
import { StageDetailsDTO } from '../../model/models'

@Injectable()
export class StagelistService{

    constructor(
        private http: HttpClient,
        private apihelper: ApiHelper
    ){}

    public get(studyId: number): Observable<StageDetailsDTO[]> {
        let url = `${environment.api}study/${studyId}/stages`;
        let options = this.apihelper.JsonOptions();
        // TODO: ADD OPTIONS
        return this.http.get<StageDetailsDTO[]>(url)
            .catch(this.apihelper.handleError);
    }

}
