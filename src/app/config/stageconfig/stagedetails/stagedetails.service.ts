
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import {map} from 'rxjs/operators';
import {Observable, of, from } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../../../../environments/environment';
import { ApiHelper } from '../../../shared';
import { StageDetailsDTO } from '../../../model/models';

@Injectable()
export class StagedetailsService {
    
    constructor(
        private apihelper: ApiHelper,
        private http: HttpClient
    ) { }

    public save(dto: StageDetailsDTO): Observable<boolean> {
        let url = `${environment.api}stage`;
        let body = JSON.stringify(dto);
        return this.http.put<boolean>(url, body, this.apihelper.JsonOptions())
            .catch(this.apihelper.handleError);
    }

    

}
