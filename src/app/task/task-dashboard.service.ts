import { Injectable } from '@angular/core'
import { Http, URLSearchParams } from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, of, from } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ApiHelper } from '../shared'
import { environment } from '../../environments/environment'
import { ReviewTaskListDTO } from '../model/models'

@Injectable()
export class TaskDashboardService{

    constructor(
        private http: HttpClient,
        private apihelper: ApiHelper
    ){}

    public getTasks(userId: number, stageId: number): Observable<ReviewTaskListDTO> {
        let url = `${environment.api}tasks`;

        let options = this.apihelper.JsonOptions()
        let params = new HttpParams();
        params.set('uid', userId.toString());
        params.set('sid', stageId.toString());

        options.params = params;

        return this.http.get<ReviewTaskListDTO>(url, options)
            .catch(this.apihelper.handleError);
    }

}
