import { Injectable } from '@angular/core';

import { Asset } from './asset';
import { ASSETS } from './mock-assets';

@Injectable()
export class AssetService {

  constructor() { }

  getAssets(): Asset[]{
    return ASSETS;
  }

}
