import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user';

import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class UserService {

  //TODO correct this code. This baseUrl is in here just to tests
  baseUrl = "https://getcryptofolio.com/";

  constructor(private http: Http) { }

  signup(user: User): Observable<User> {
    return this.http.post(`${this.baseUrl}api/auth/signup`,
      JSON.stringify({ user })
      , { headers: this.getHeaders() })
      .map(res => { return res.json() })
      .catch(this.handleError);
  }

  login(user: User) : Observable<User> {

    let usernameEmail = (user.username) ? user.username : user.email;

    return this.http.post(`${this.baseUrl}api/auth/login`,
      JSON.stringify({
        user: {
          username_or_email: usernameEmail,
          password: user.password
        }
      })
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
    headers.append('Authorization','Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJVc2VyOmE3N2U5YjE1LTgxYmItNDg5MS04OWMxLTZlNmRkYTNiNjY4NyIsImV4cCI6MTUwMDkzODg4MywiaWF0IjoxNTAwNjc5NjgzLCJpc3MiOiJDcnlwdG9mb2xpbyIsImp0aSI6IjI4YjcxOTI0LWNjMTMtNDI1ZC05ZTlmLTAzYzBiM2FmNzM5ZSIsInBlbSI6e30sInN1YiI6IlVzZXI6YTc3ZTliMTUtODFiYi00ODkxLTg5YzEtNmU2ZGRhM2I2Njg3IiwidHlwIjoiYWNjZXNzIn0.BCyQ6Ks5rzxWAhyM6XkAnoY2BidZ-NUHTJZLYN9wg7cnfyP10EvbVcfsDjGlzTS2uzZ6swKj-gdQXV0zXydOJQ');
    return headers;
  }



  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }



}
