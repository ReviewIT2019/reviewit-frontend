import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, of, from } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { ApiHelper } from '../../shared';
import { StudyDetailsDTO } from '../../model/models';

@Injectable()
export class StudydetailsService {

    constructor(
        private apiHelper: ApiHelper,
        private http: HttpClient
    ) { }

    public get(id: number): Observable<StudyDetailsDTO> {
        let url = `${environment.api}study/${id}`;
        return this.http.get<StudyDetailsDTO>(url, this.apiHelper.JsonOptions())
            .catch(this.apiHelper.handleError);
    }

    public update(model: StudyDetailsDTO): Observable<boolean> {
        let url = `${environment.api}study`;
        let body = JSON.stringify(model);
        return this.http.put<boolean>(url, body, this.apiHelper.JsonOptions())
            .catch(this.apiHelper.handleError);
    }

    public delete(id: number) {
        let url = `${environment.api}study/${id}`;
        return this.http.delete(url, this.apiHelper.JsonOptions())
            .pipe(map(this.apiHelper.extractJson))
            .catch(this.apiHelper.handleError);
    }


}
