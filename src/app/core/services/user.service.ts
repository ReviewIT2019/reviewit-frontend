import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
//import { CookieService } from 'angular2-cookie/core';
import { CookieService } from 'ngx-cookie-service';


import { Router } from '@angular/router';

import { UserDetailsDTO } from '../../model/models';

@Injectable()
export class UserService {

  constructor(private _cookieService: CookieService, private router: Router) {
    let userJson = this._cookieService.get('user')
    if(userJson){
      let user =  JSON.parse(userJson);
      this.loggedInUserSource.next(user);
    }
  }

  private loggedInUserSource = new BehaviorSubject<UserDetailsDTO>(null);

  get login$(){
    return this.loggedInUserSource.asObservable();
  }

  get getUser(){
    return this.loggedInUserSource.getValue();
  }

  logIn(user: UserDetailsDTO){
    this.loggedInUserSource.next(user);
    this._cookieService.set('user', JSON.stringify(user));
  }

  logOut(){
    this.loggedInUserSource.next(null);
    this._cookieService.deleteAll('user');
    this.router.navigate(['who']);
  }



}
