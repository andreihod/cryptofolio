import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Exchange } from './exchange';
import { Market } from './market';

import { environment } from './../environments/environment';

@Injectable()
export class ExchangeService {


  getExchanges() {
    return this.http.get(`${environment.apiUrl}/exchanges`
      , { headers: this.getHeaders() });
  }


  getExchage(id: number) {
    return this.http.get(`${environment.apiUrl}/exchanges/${id}`,
      { headers: this.getHeaders() }
    )
  }

  private supportedExchanges: Exchange[] = [];

  constructor(private http: Http) {
  }

  getSupportedExchanges(): Exchange[] {
    return this.supportedExchanges;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }


}
