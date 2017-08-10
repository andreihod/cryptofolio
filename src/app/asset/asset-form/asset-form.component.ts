import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Exchange } from './../../_shared/exchange';
import { Asset } from './../asset';
import { Coin } from './../../_shared/coin';

import { ExchangeService } from './../../_shared/exchange.service';
import { AssetService } from './../asset.service';
import { CoinService } from './../../_shared/coin.service';

@Component({
  selector: 'app-asset-form',
  templateUrl: './asset-form.component.html',
  styleUrls: ['./asset-form.component.css']
})

export class AssetFormComponent implements OnInit {

  @Output() assetAdded = new EventEmitter();

  public asset = new Asset();
  public coins: Coin[];
  public exchanges: Exchange[];
  public loading = true;

  constructor(
    private assetService: AssetService,
    private exchangeService: ExchangeService,
    private coinService: CoinService
  ) {}

  addAsset(f): void {
    this.assetService.addAsset(this.asset).subscribe(
      ret => { this.assetAdded.emit() }
    );
    this.resetForm();
  }

  private resetForm(): void {
    this.loading = true;

    this.asset = new Asset();

    this.coinService.getCoins().subscribe(coins => {
      this.coins = coins;
      this.changeCoin(coins[0]);
      this.asset.coin = this.coins[0];
      this.asset.coin_id = this.coins[0].id;
    });
  }

  public changeCoin(coin: Coin){
    this.loading = true;
      this.exchangeService.getExchangesFromCoin(coin.id).subscribe(exchanges => {
        this.exchanges = exchanges;
        this.asset.exchange = this.exchanges[0];
        this.asset.exchange_id = this.exchanges[0].id;
        this.loading = false;
      });
  }

  ngOnInit() {
    this.resetForm();
  }
}
