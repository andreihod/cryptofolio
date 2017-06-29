import { Market } from './market'

export class Exchange {

  constructor(public id : number, public name: string, public market: Market) { }

  getDisplayName(): string {
    return this.name + ' - ' +
           this.market.currencyFrom + '/' +
           this.market.currencyTo;
  }

}
