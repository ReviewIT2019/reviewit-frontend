
import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from '@angular/common/http';
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {map, tap} from 'rxjs/operators';
import {Observable, of, from } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { ApiHelper } from '../shared';
import { StudyDetailsDTO } from '../model';

@Injectable()
export class StudylistService {

    constructor(
        private apiHelper: ApiHelper,
        private http: HttpClient,
    ) { }

    public get(): Observable<StudyDetailsDTO[]> {
        
        let url = `${environment.api}study/list`;
        let options = this.apiHelper.UidJsonOptions2();
        let studies = this.http.get<StudyDetailsDTO[]>(url, options)
          .pipe(
            tap( // Log the result or error
              data => console.log("log", data),
              error => console.log("log", error)
            )
          )
          .catch(this.apiHelper.handleError);

        return studies;
    }

    public postStudy(study: StudyDetailsDTO): Observable<number> {
        let url = `${environment.api}study`;
        let body = JSON.stringify(study);
        let options = this.apiHelper.UidJsonOptions();
        //options.responseType = 'json';
        return this.http.post<number>(url, body, options)
            .catch(this.apiHelper.handleError);
    }


}
