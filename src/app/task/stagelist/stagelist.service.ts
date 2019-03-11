import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
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
        return this.http.get<StageDetailsDTO[]>(url, this.apihelper.JsonOptions())
            .catch(this.apihelper.handleError);
    }

}
