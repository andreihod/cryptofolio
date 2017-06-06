import { Injectable } from '@angular/core';

@Injectable()
export class CoinService {

  private supportedCoins: string[] = [];

  constructor() {
    this.supportedCoins.push("Bitcoin");
    this.supportedCoins.push("Ethereum");
    this.supportedCoins.push("Stellar");
    this.supportedCoins.push("Ripple");
    this.supportedCoins.push("ZCash");
  }

  getSupportedCoins(): string[] {
    return this.supportedCoins;
  }

}
