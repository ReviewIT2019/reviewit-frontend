import {Injectable} from '@angular/core';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
//import {CookieService} from 'angular2-cookie/core';
import {UserService} from '../core';

export interface IRequestOptions {
  body?: any;
  headers?: HttpHeaders | { [header: string]: string | Array<string> };
  observe?: any;
  params?: HttpParams | { [param: string]: string | Array<string> };
  reportProgress?: boolean;
  responseType?: "json";
  withCredentials?: boolean;
}

@Injectable()
export class ApiHelper {

    constructor(

        private user: UserService
        ) { }

    public AuthOptions(): IRequestOptions {

      //let token = this._cookieService.get('token');
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          //'Authorization': token
        }),
        observe: 'response' as 'body'
      };
    }

    public UidJsonOptions(): IRequestOptions {

      const reqOpts : IRequestOptions = {
        params: new HttpParams().set('uid', this.user.getUser.Id.toString()),
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8'
        }),
        observe: 'response'
      };

      return reqOpts;
    }

    public JsonOptions(): IRequestOptions {
      const reqOpts : IRequestOptions = {
        params: new HttpParams(),
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8'
        }),
        observe: 'response'
      };

      return reqOpts;
    }

    public handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throwError(errMsg);
    }

    public extractJson(res: Response) {
        return res.json();
    }

}
