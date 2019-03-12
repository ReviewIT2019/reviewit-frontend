
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {map, tap} from 'rxjs/operators';
import {Observable, of, from } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { ApiHelper } from '../shared';
import { UserDetailsDTO } from '../model/models';

@Injectable()
export class WhoAreYouService {

    constructor(
        private apihelper: ApiHelper,
        private http: HttpClient
    ) { }

    public get(): Observable<UserDetailsDTO[]> {
        let url = `${environment.api}user`;
        // TODO: ADD OPTIONS
        let options = this.apihelper.JsonOptions();
        let users = this.http.get<UserDetailsDTO[]>(url)
          .pipe(
            tap( // Log the result or error
              data => console.log("log", data),
              error => console.log("log", error)
            )
          )
          .catch(this.apihelper.handleError);
        return users;
    }

    public create(dto: UserDetailsDTO): Observable<UserDetailsDTO> {
        let url = `${environment.api}user`;
        let options = this.apihelper.JsonOptions();
        return this.http.post<UserDetailsDTO>(url, dto, options)
            .catch(this.apihelper.handleError);
    }

    
}
