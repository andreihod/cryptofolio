import { ExchangeService } from './../../exchange.service';
import { CoinService } from './../../coin.service';
import { AssetService } from './../../asset.service';
import { Exchange } from './../../exchange';
import { Asset } from './../../asset';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {

  public assets: Asset[];
  public editingAsset: Asset;
  private supportedCoins: string[] = [];
  public exchanges: Exchange[];

  constructor(private assetService: AssetService,
    private coinService: CoinService,
    private exchangeService: ExchangeService) { }

  ngOnInit() {
    this.assets = this.assetService.getAssets();
    this.supportedCoins = this.coinService.getSupportedCoins();
    this.exchangeService.getExchanges().subscribe(result => {
      this.exchanges = result      //this.exchanges = result.json()
    });
  }

  removeAsset(asset: Asset): void {
    // this.assetService.removeAsset(asset);
  }

  editAsset(myAsset: Asset): void {
    this.editingAsset = myAsset;
  }

  saveAsset(myAsset: Asset): void {
    this.editingAsset = null;
  }

  compareExchange(exchange1: Exchange, exchange2: Exchange) {
    return (exchange1 && exchange2 && exchange1.id == exchange2.id);
  }
}
