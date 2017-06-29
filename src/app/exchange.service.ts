import { Injectable } from '@angular/core';
import { Exchange } from './exchange';
import { Market } from './market';

@Injectable()
export class ExchangeService{

  private supportedExchanges: Exchange[] = [];

  constructor() {
    this.supportedExchanges.push(new Exchange(1, "Poloniex", new Market('BTC', 'USDT')));
    this.supportedExchanges.push(new Exchange(2, "Poloniex", new Market('BTC', 'EUR')));
    this.supportedExchanges.push(new Exchange(35, "Kraken", new Market('BTX', 'USD')));
    this.supportedExchanges.push(new Exchange(45, "ZCash", new Market('BTC', 'USDT')));
    this.supportedExchanges.push(new Exchange(59, "Kraken", new Market('BTX', 'EUR')));
  }

  getSupportedExchanges(): Exchange[] {
    return this.supportedExchanges;
  }

}
