import { Component, OnInit } from '@angular/core';

import { Asset } from '../asset';
import { AssetService } from '../asset.service';
import { ExchangeService } from '../exchange.service';
import { CoinService } from '../coin.service';
import { Exchange } from '../exchange';
import { Market } from '../market';

@Component({
  selector: 'app-asset-form',
  templateUrl: './asset-form.component.html',
  styleUrls: ['./asset-form.component.css']
})
export class AssetFormComponent implements OnInit {

  public asset = new Asset();
  public coin;
  public supportedCoins: string[];
  public exchanges: Exchange[];

  constructor(private assetService: AssetService,
    private exchangeService: ExchangeService,
    private coinService: CoinService) {

  }

  addAsset(): void {
    this.assetService.addAsset(this.asset);
    this.resetForm();
  }

  private resetForm(): void {
    //this.formAsset = new Asset(this.supportedCoins[0], 0.0001, this.supportedExchanges[0]);
  }

  ngOnInit() {
    this.exchangeService.getExchanges().subscribe(exchanges => {
      this.exchanges = exchanges;
      this.asset.exchange = this.exchanges[0];
    });
    this.supportedCoins = this.coinService.getSupportedCoins();
    this.asset.coin = this.supportedCoins[0];
    this.resetForm();
  }

}
