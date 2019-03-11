
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiHelper } from '../shared';

@Injectable()
export class ConfigService {

    constructor(
        private apiHelper: ApiHelper,
        private http: HttpClient
    ) { }
    
    public startStudy(studyId: number): Observable<number> {
        let url = `${environment.api}study/${studyId}/start`;


        let options = this.apiHelper.JsonOptions();
        let x = this.http.get<number>(url, options).catch(this.apiHelper.handleError);


        return x;

        //return this.http.get(url, options).pipe(map(this.apiHelper.extractJson)).catch(this.apiHelper.handleError);

    }



}
