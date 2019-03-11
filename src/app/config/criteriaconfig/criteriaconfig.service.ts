
import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, of, from } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { api } from '../../shared/globals';
import { ApiHelper } from '../../shared';
import { CriteriaDTO, FieldDTO } from '../../model/models'

@Injectable()
export class CriteriaconfigService {

    constructor(
        private apihelper: ApiHelper,
        private http: HttpClient
    ) { }
    
    search(studyId: number, str: string): Observable<FieldDTO[]> {
        let params = new HttpParams();
        //params.set('appid', StaticSettings.API_KEY);
        params.set('term', str);
        let options = this.apihelper.JsonOptions();
        options.params = params;

        let url = `${api}/study/${studyId}/field/search`;
        return this.http.get<FieldDTO[]>(url, options)
            .catch(this.apihelper.handleError);
    }

    public get(studyId: number): Observable<CriteriaDTO> {
        let url = `${environment.api}study/${studyId}/criteria`;
        return this.http.get<CriteriaDTO>(url, this.apihelper.JsonOptions())
            .catch(this.apihelper.handleError);
    }

    public save(studyId: number, dto: CriteriaDTO): Observable<boolean> {
        let url = `${environment.api}study/${studyId}/criteria`;
        return this.http.put<boolean>(url, dto, this.apihelper.JsonOptions())
            .catch(this.apihelper.handleError);
    }


}
