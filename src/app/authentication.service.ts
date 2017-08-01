import { Router } from '@angular/router';
import { User } from './user';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

@Injectable()
export class AuthenticationService {

  public jwt: string;

  constructor(private http: Http,
  private router : Router) {
    this.jwt = localStorage.getItem('jwt');
  }

  login(usernameEmail: string, password: string): Observable<boolean> {
    return this.http.post(`${environment.apiUrl}/auth/login`,
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
          this.router.navigate(['/assets']);
          return true;
        } else {
          return false;
        }
      }).catch((err: any) => {
        return Observable.throw(new Error(err.json().message));
      });
  }

  logout(): void {
    this.jwt = null;
    localStorage.removeItem('jwt');
    this.router.navigate(['/']);
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  public isUsuarioAutenticado() {
    return this.jwt !== null;
  }
}
