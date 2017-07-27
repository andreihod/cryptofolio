import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user';
import { environment } from '../environments/environment';

import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http, private authenticationService : AuthenticationService) { }

  signup(user: User): Observable<User> {
    return this.http.post(`${environment.apiUrl}/auth/signup`,
      JSON.stringify({ user })
      , { headers: this.getHeaders() })
      .map(res => { return res.json() })
      .catch(this.handleError);
  }

  

  update(user: User) {
    return this.http.put(`${environment.apiUrl}/users/me`,
      JSON.stringify({ user })
      , { headers: this.getHeaders() });
  }

  get() {
    return this.http.get(`${environment.apiUrl}/users/me`
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
