
import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, of, from } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { ApiHelper } from '../../shared';
import { UserDetailsDTO, StudyMemberDTO } from '../../model/models'

@Injectable()
export class StudymembersService {

    constructor(
        private apiHelper: ApiHelper,
        private http: HttpClient
    ) { }
    
    public getResearchers(studyId: number): Observable<UserDetailsDTO[]> {
        let url = `${environment.api}study/${studyId}/studymember`;
        return this.http.get<UserDetailsDTO[]>(url, this.apiHelper.JsonOptions())
            .catch(this.apiHelper.handleError);
    }

    public searchGlobalUsers(str: string): Observable<UserDetailsDTO[]> {
        let url = `${environment.api}user/search`;
        //let params: URLSearchParams = new URLSearchParams();
        //params.set('appid', StaticSettings.API_KEY);
        let options = this.apiHelper.JsonOptions();
        let params = new HttpParams().set('term', str);
        options.params = params;
        //options.params.set('term', str);
        //options.params = params;
        return this.http.get<UserDetailsDTO[]>(url, options)
            .catch(this.apiHelper.handleError);
    }

    public save(studyId: number, dtos: UserDetailsDTO[]): Observable<boolean> {
        let url = `${environment.api}study/${studyId}/studymember`;
        return this.http.put<boolean>(url, dtos, this.apiHelper.JsonOptions())
            .catch(this.apiHelper.handleError);
    }

}
