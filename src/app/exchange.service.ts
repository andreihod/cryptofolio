import { Injectable } from '@angular/core';
import { Exchange } from './exchange';
import { Market } from './market';

@Injectable()
export class ExchangeService{

  private supportedExchanges: Exchange[] = [];

  constructor() {
    this.supportedExchanges.push(new Exchange("Poloniex", new Market('BTC', 'USDT')));
    this.supportedExchanges.push(new Exchange("Poloniex", new Market('BTC', 'EUR')));
    this.supportedExchanges.push(new Exchange("Kraken", new Market('BTX', 'USD')));
    this.supportedExchanges.push(new Exchange("Kraken", new Market('BTX', 'EUR')));
  }

  getSupportedExchanges(): Exchange[] {
    return this.supportedExchanges;
  }

}
