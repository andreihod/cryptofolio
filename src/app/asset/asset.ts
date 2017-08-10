import { Exchange } from './../_shared/exchange';
import { Coin } from './../_shared/coin';

export class Asset {
  public id: number;
  public coin: Coin;
  public mybalance: number;
  public exchange: Exchange

  public exchange_id: number;
  public coin_id: number;

  constructor() { }

  public static fromJson(json: string){
    let asset = Object.assign(new Asset(), json);
    asset.coin = Object.assign(new Coin(), asset.coin);
    asset.exchange = Object.assign(new Exchange(), asset.exchange);
    return asset;
  }

}
