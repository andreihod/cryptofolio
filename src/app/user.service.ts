import { User } from './user';

import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  signup(user: User) {
    return this.http.post('http://www.getcryptofolio.com:4001/api/auth/signup',
      `
    { 
      "user" : {
          ${JSON.stringify(user)}
      }
    }
    `
      , { headers: this.getHeaders() });
  }

  login() {

  }

  udpate() {

  }

  get() {

  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

}
