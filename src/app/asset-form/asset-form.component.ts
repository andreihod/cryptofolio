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
  styleUrls: ['./asset-form.component.css'],
  providers: [ExchangeService]
})
export class AssetFormComponent implements OnInit {

  private formAsset: Asset;
  private supportedExchanges: Exchange[] = [];
  private supportedCoins: string[] = [];

  constructor(private assetService: AssetService,
    private exchangeService: ExchangeService,
    private coinService: CoinService) { }

  addAsset(asset: Asset): void {
    this.assetService.addAsset(asset);
    this.resetForm();
  }

  private resetForm(): void {
    this.formAsset = new Asset(this.supportedCoins[0], 0.0001, this.supportedExchanges[0]);
  }

  ngOnInit() {
    this.supportedExchanges = this.exchangeService.getSupportedExchanges();
    this.supportedCoins = this.coinService.getSupportedCoins();
    this.resetForm();
  }

}
