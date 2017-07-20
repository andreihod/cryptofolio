import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user';

import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  signup(user: User): Observable<User> {
    return this.http.post('http://www.getcryptofolio.com:4001/api/auth/signup',
      JSON.stringify({ user })
      , { headers: this.getHeaders() })
      .map(res => { return res.json })
      .catch(this.handleError);
  }

  login(user: User) {

    let usernameEmail = (user.username) ? user.username : user.email;

    return this.http.post('/api/auth/login',
      JSON.stringify({
        user: {
          username_or_email: usernameEmail,
          password: user.password
        }
      })
      , { headers: this.getHeaders() });
  }

  update(user: User) {
    return this.http.put('/api/users/me',
      JSON.stringify({ user })
      , { headers: this.getHeaders() });
  }

  get() {
    return this.http.get('/api/users/me'
      , { headers: this.getHeaders() });
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }



  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}
