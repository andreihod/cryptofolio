import { Injectable } from '@angular/core';

import { Asset } from './asset';

@Injectable()
export class AssetService {

  public assets : Asset[];

  constructor() {
    this.assets = new Array<Asset>();
  }

  addAsset(asset: Asset) {
    this.assets.push(asset);
  }

  getAssets(): Asset[]{
    return this.assets;
  }
  /**
  getAssets(): Asset[]{
    return ASSETS;
  }

  

  removeAsset(asset : Asset){
    let index: number = ASSETS.indexOf(asset);
    if (index !== -1) {
        ASSETS.splice(index, 1);
    }
  }
 */
}
