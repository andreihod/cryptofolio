import { Component, OnInit } from '@angular/core';

import { Asset } from '../asset';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {

  assets: Asset[];

  constructor(private assetService: AssetService) { }

  ngOnInit() {
    this.assets = this.assetService.getAssets();
  }

  removeAsset(asset: Asset): void {
    this.assetService.removeAsset(asset);
  }

}
