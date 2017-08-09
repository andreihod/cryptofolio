import { CoinService } from "./../../coin.service";
import { ExchangeService } from "./../../exchange.service";
import { AssetService } from "./../../asset.service";
import { Exchange } from "./../../exchange";
import { Asset } from "./../../asset";
import { Coin } from "./../../coin";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-asset-form',
  templateUrl: './asset-form.component.html',
  styleUrls: ['./asset-form.component.css']
})
export class AssetFormComponent implements OnInit {
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
    
    this.assetService.addAsset(this.asset);
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
