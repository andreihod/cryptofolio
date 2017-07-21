import { User } from './user';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  //FORGIVE ME OH ALMIGHTY GOD FOR THIS. IT'S JUST A TEST, I PROMISE
  baseUrl = "https://getcryptofolio.com/";
  public jwt: string;

  constructor(private http: Http) {
    this.jwt = localStorage.getItem('jwt');
  }

  login(usernameEmail: string, password: string): Observable<boolean> {
    return this.http.post(`${this.baseUrl}api/auth/login`,
      JSON.stringify({
        user: {
          username_or_email: usernameEmail,
          password: password
        }
      })
      , { headers: this.getHeaders() })
      .map(res => {
        let jwt = res.json().jwt;
        if (jwt) {
          this.jwt = jwt;
          localStorage.setItem('jwt', this.jwt);
          return true;
        } else {
          return false;
        }
      });
  }

  logout(): void {
    this.jwt = null;
    localStorage.removeItem('jwt');
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
