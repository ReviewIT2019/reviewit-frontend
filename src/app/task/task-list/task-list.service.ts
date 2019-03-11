import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of, from } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { ApiHelper } from '../../shared';
import { ReviewTaskListDTO } from '../../model';


@Injectable()
export class TaskListService
{
    constructor(
        private apihelper: ApiHelper,
        private http: HttpClient
    ) { }

    public getTasks(userId: number, stageId: number): Observable<ReviewTaskListDTO> {
        let url = `${environment.api}tasks`;
        //let params: URLSearchParams = new URLSearchParams();
        //params.set('appid', StaticSettings.API_KEY);

        let options = this.apihelper.JsonOptions();
        let params = new HttpParams();
        params.set("uid", userId.toString());
        params.set("sid", stageId.toString());

        options.params = params;

        return this.http.get<ReviewTaskListDTO>(url, options)
            .catch(this.apihelper.handleError);
    }

    
}

