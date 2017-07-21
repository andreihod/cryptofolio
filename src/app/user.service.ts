import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user';

import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class UserService {

  //FORGIVE ME OH ALMIGHTY GOD FOR THIS. IT'S JUST A TEST, I PROMISE
  baseUrl = "https://getcryptofolio.com/";

  constructor(private http: Http, private authenticationService : AuthenticationService) { }

  signup(user: User): Observable<User> {
    return this.http.post(`${this.baseUrl}api/auth/signup`,
      JSON.stringify({ user })
      , { headers: this.getHeaders() })
      .map(res => { return res.json() })
      .catch(this.handleError);
  }

  

  update(user: User) {
    return this.http.put(`${this.baseUrl}/api/users/me`,
      JSON.stringify({ user })
      , { headers: this.getHeaders() });
  }

  get() {
    return this.http.get(`${this.baseUrl}/api/users/me`
      , { headers: this.getHeaders() });
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization',`Bearer ${this.authenticationService.jwt}`);
    return headers;
  }



  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }



}
