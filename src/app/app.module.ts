import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetFormComponent } from './asset-form/asset-form.component';
import { AssetService } from './asset.service';

@NgModule({
  declarations: [
    AppComponent,
    AssetListComponent,
    AssetFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AssetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
