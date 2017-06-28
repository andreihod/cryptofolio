import { Injectable } from '@angular/core';

import { Asset } from './asset';
import { ASSETS } from './mock-assets';

@Injectable()
export class AssetService {

  assets: Asset[];

  constructor() { }

  getAssets(): Asset[]{
    return ASSETS;
  }

  addAsset(asset: Asset) {
    ASSETS.push(asset);
  }

  removeAsset(asset : Asset){
    let index: number = ASSETS.indexOf(asset);
    if (index !== -1) {
        ASSETS.splice(index, 1);
    }
  }

}
