import { Component, OnInit } from '@angular/core';

import { Asset } from '../asset';
import { AssetService } from '../asset.service';

import { ExchangeService } from './../exchange.service';
import { CoinService } from './../coin.service';
import { Exchange } from '../exchange';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {

  public assets: Asset[];
  public editingAsset: Asset;
  private supportedCoins: string[] = [];
  private supportedExchanges: Exchange[] = [];

  constructor(private assetService: AssetService,
    private coinService: CoinService,
    private exchangeService: ExchangeService) { }

  ngOnInit() {
   // this.assets = this.assetService.getAssets();
    this.supportedCoins = this.coinService.getSupportedCoins();
    this.supportedExchanges = this.exchangeService.getSupportedExchanges();
  }

  removeAsset(asset: Asset): void {
   // this.assetService.removeAsset(asset);
  }

  editAsset(asset: Asset): void {
    this.editingAsset = asset;
  }

  saveAsset(asset: Asset): void {
    this.editingAsset = null;
  }

  compareExchange(exchange1: Exchange, exchange2: Exchange) {
    return (exchange1 && exchange2 && exchange1.id == exchange2.id);
  }
}
