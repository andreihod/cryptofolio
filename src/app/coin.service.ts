import { Exchange } from './exchange';
import { Coin } from './coin';
import { environment } from './../environments/environment';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CoinService {

  constructor(private http: Http) {
  }

  getCoins() {
    return this.http.get(`${environment.apiUrl}/coins`
      , { headers: this.getHeaders() })
      .map(res => { return res.json().map((cn) => Object.assign(new Coin(), cn.coin));
      });
  }


  getCoin(id: number) {
    return this.http.get(`${environment.apiUrl}/coins/${id}`,
      { headers: this.getHeaders() }
    ).map(res => res.json())
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

}
