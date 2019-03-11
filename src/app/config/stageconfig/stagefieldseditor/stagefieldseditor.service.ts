import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, of, from } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../../../../environments/environment';
import { ApiHelper } from '../../../shared';
import { StageFieldsDTO } from '../../../model';


@Injectable()
export class StagefieldseditorService
{
    constructor(
        private apiHelper: ApiHelper,
        private http: HttpClient
    ) { }

    public get(stageId: number): Observable<StageFieldsDTO> {
        let url = `${environment.api}stage/${stageId}/stagefield`;
        return this.http.get<StageFieldsDTO>(url, this.apiHelper.JsonOptions())
            .catch(this.apiHelper.handleError);
    }

    public save(stageId: number, dto: StageFieldsDTO): Observable<boolean> {
        let url = `${environment.api}stage/${stageId}/stagefield`;
        let body = JSON.stringify(dto);
        return this.http.put<boolean>(url, body, this.apiHelper.JsonOptions())
            .catch(this.apiHelper.handleError);
    }
}

