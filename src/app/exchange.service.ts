import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Exchange } from "./exchange";
import { Market } from "./market";

import { environment } from "./../environments/environment";

@Injectable()
export class ExchangeService {
  getExchanges() {
    return this.http
      .get(`${environment.apiUrl}/exchanges`, { headers: this.getHeaders() })
      .map(res => {
        return res.json().map(ex => Object.assign(new Exchange(), ex.exchange));
      });
  }

  getExchage(id: number) {
    return this.http
      .get(`${environment.apiUrl}/exchanges/${id}`, {
        headers: this.getHeaders()
      })
      .map(res => res.json());
  }

  getExchangesFromCoin(coinId: number){
    return this.http
      .get(`${environment.apiUrl}/coins/${coinId}/exchanges`, { headers: this.getHeaders() })
      .map(res => {
        return res.json().map(ex => Object.assign(new Exchange(), ex.exchange));
      });
  }

  constructor(private http: Http) {}

  private getHeaders() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return headers;
  }
}
