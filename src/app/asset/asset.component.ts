import { AssetListComponent } from './asset-list/asset-list.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {

  @ViewChild(AssetListComponent) assetlist: AssetListComponent;


  constructor() { }

  ngOnInit() {
  }

}
