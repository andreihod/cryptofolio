import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Exchange } from "./../../_shared/exchange";
import { Asset } from "./../asset";
import { Coin } from "./../../_shared/coin";

import { ExchangeService } from "./../../_shared/exchange.service";
import { AssetService } from "./../asset.service";
import { CoinService } from "./../../_shared/coin.service";

import {Observable} from 'rxjs/Rx';


@Component({
  selector: "app-asset-list",
  templateUrl: "./asset-list.component.html",
  styleUrls: ["./asset-list.component.css"]
})
export class AssetListComponent implements OnInit {
  public assets: Asset[];
  public editingAsset: Asset;
  public coins: Coin[];
  public exchanges: Exchange[];

  constructor(
    private assetService: AssetService,
    private coinService: CoinService,
    private exchangeService: ExchangeService
  ) {}

  ngOnInit() {
    this.getAssets();

    this.coinService.getCoins().subscribe(result => {
      this.coins = result;
    });

    this.exchangeService.getExchanges().subscribe(result => {
      this.exchanges = result;
    });

    Observable.interval(10000).subscribe(x => {
      if(!this.editingAsset){
        this.getAssets();
      }
    });
  }

  public getAssets() {
    console.log('consultou');
    this.assetService.getAssets().subscribe(result => {
      this.assets = result;
    });
  }

  public changeCoin(coin: Coin) {
    this.exchangeService.getExchangesFromCoin(coin.id).subscribe(exchanges => {
      this.exchanges = exchanges;
      this.editingAsset.exchange = exchanges[0];
    });
  }

  removeAsset(asset: Asset): void {
    this.assetService.removeAsset(asset).subscribe(res => {});
  }

  // TODO: Clean this code
  editAsset(myAsset: Asset): void {
    this.editingAsset = myAsset;
    this.exchangeService
      .getExchangesFromCoin(myAsset.coin.id)
      .subscribe(exchanges => {
        this.exchanges = exchanges;
      });
  }

  saveAsset(asset: Asset): void {
    this.editingAsset = null;
    this.assetService.update(asset).subscribe(ret => {
     // this.getAssets();
    });
  }

  compareExchange(exchange1: Exchange, exchange2: Exchange) {
    return exchange1 && exchange2 && exchange1.id == exchange2.id;
  }

  compareCoin(coin1: Coin, coin2: Coin) {
    return coin1 && coin2 && coin1.id == coin2.id;
  }
}
