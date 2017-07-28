import { Market } from './market'

export class Exchange {

  id: number;
  name: string;
  price: number;
  market: Market;

  getDisplayName(): string {
    return this.name + ' - ' +
           this.market.currencyFrom + '/' +
           this.market.currencyTo;
  }

}
