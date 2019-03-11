
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ApiHelper } from '../../shared';

@Injectable()
export class StudysourcesService {

    constructor(
        private apihelper: ApiHelper,
        private http: HttpClient
    ) { }
    
    


}
