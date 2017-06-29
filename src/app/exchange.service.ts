import { Injectable } from '@angular/core';
import { Exchange } from './exchange';
import { Market } from './market';

@Injectable()
export class ExchangeService{

  private supportedExchanges: Exchange[] = [];

  constructor() {
    this.supportedExchanges.push(new Exchange(1, "Poloniex", new Market('BTC', 'USDT'),900));
    this.supportedExchanges.push(new Exchange(2, "Poloniex", new Market('BTC', 'EUR'), 23));
    this.supportedExchanges.push(new Exchange(35, "Kraken", new Market('BTX', 'USD'), 21));
    this.supportedExchanges.push(new Exchange(45, "ZCash", new Market('BTC', 'USDT'), 0.002));
    this.supportedExchanges.push(new Exchange(59, "Kraken", new Market('BTX', 'EUR'), 260));
  }

  getSupportedExchanges(): Exchange[] {
    return this.supportedExchanges;
  }

}
