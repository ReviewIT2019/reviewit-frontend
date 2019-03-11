
import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from '@angular/common/http';
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {map} from 'rxjs/operators';
import {Observable, of, from } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../../../../environments/environment';
import { ApiHelper } from '../../../shared';
import { StudyMemberDTO, DistributionDTO } from '../../../model/models'

@Injectable()
export class ReviewstrategyService {

    constructor(
        private apihelper: ApiHelper,
        private http: HttpClient
    ) { }
    
    search(studyId: number, str: string): Observable<StudyMemberDTO[]> {
        //let params: URLSearchParams = new URLSearchParams();
        //params.set('appid', StaticSettings.API_KEY);

        let options = this.apihelper.JsonOptions();
        let params = new HttpParams().set('term', str);
        options.params = params;
        //options.params.set('term', str);
        let url = `${environment.api}study/${studyId}/studymember`;
        return this.http.get<StudyMemberDTO[]>(url, options)
            .catch(this.apihelper.handleError);
    }

    getAllResearchers(studyId: number): Observable<StudyMemberDTO[]> {
        let url = `${environment.api}study/${studyId}/studymember`;
        return this.http.get<StudyMemberDTO[]>(url, this.apihelper.JsonOptions())
            .catch(this.apihelper.handleError);
    }

    public get(stageId: number): Observable<DistributionDTO> {
        let url = `${environment.api}stage/${stageId}/distribution`;
        return this.http.get<DistributionDTO>(url, this.apihelper.JsonOptions())
            .catch(this.apihelper.handleError);
    }

    public save(stageId: number, dto: DistributionDTO): Observable<boolean> {
        let url = `${environment.api}stage/${stageId}/distribution`;
        return this.http.put<boolean>(url, dto, this.apihelper.JsonOptions())
            .catch(this.apihelper.handleError);
    }

}
