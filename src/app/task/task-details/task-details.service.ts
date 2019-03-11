import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {map} from 'rxjs/operators';
import {Observable, of, from } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { ApiHelper } from '../../shared';
import { ReviewTaskListDTO, ReviewTaskDTO } from '../../model';


@Injectable()
export class TaskDetailsService {
    constructor(
        private apihelper: ApiHelper,
        private http: HttpClient
    ) { }

    public getTasks(stageId: number): Observable<ReviewTaskListDTO> {
        let url = `${environment.api}tasks`;
        let options = this.apihelper.UidJsonOptions();
        let params = new HttpParams().set('sid', stageId.toString());
        //options.params.set('sid', stageId.toString());
        options.params = params;

        return this.http.get<ReviewTaskListDTO>(url, options)
            .catch(this.apihelper.handleError);
    }

    public UpdateTask(dto: ReviewTaskDTO) {
        let url = `${environment.api}tasks`;
        return this.http.put(url, dto, this.apihelper.JsonOptions())
            .catch(this.apihelper.handleError);
    }


}

