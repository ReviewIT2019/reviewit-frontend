
import {Injectable} from '@angular/core'
import { HttpClient } from "@angular/common/http";
import {map} from 'rxjs/operators';
import {Observable, of, from } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { ApiHelper } from '../../shared';
import { FieldDTO } from '../../model/models';

@Injectable()
export class DatafieldeditorService {
    
    constructor(
        private apihelper: ApiHelper,
        private http: HttpClient
    ) { }

    public get(studyId: number): Observable<FieldDTO[]> {
        let url = `${environment.api}study/${studyId}/field`;
        return this.http.get<FieldDTO[]>(url, this.apihelper.JsonOptions())
            .catch(this.apihelper.handleError);
    }

    public save(studyId: number, dtos: FieldDTO[]): Observable<boolean> {
        let url = `${environment.api}study/${studyId}/field`;
        return this.http.put<boolean>(url, dtos, this.apihelper.JsonOptions())
            .catch(this.apihelper.handleError);
    }

    

}
