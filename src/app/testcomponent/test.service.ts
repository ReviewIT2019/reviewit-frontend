
import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';

import {Observable, of, from } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { api } from '../shared/globals';
import { ApiHelper } from '../shared';

@Injectable()
export class TestService {

    constructor(
        private apihelper: ApiHelper,
        private http: HttpClient
    ) { }
    
    public getResearchers(studyId: number): Observable<any> {
        let url = `${api}/study/${studyId}/researchers`;
        return this.http.get<any>(url, this.apihelper.JsonOptions())
            .catch(this.apihelper.handleError);
    }


}
