import { GlobalEventsManager } from './global-events-manager.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AssetListComponent } from './asset/asset-list/asset-list.component';
import { AssetFormComponent } from './asset/asset-form/asset-form.component';
import { AssetService } from './asset.service';

import { CoinService } from './coin.service';
import { ExchangeService } from './exchange.service';
import { routing } from './app.routing';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { AssetComponent } from './asset/asset.component';
import { AuthenticationComponent } from './authentication/authentication.component';
@NgModule({
  declarations: [
    AppComponent,
    AssetListComponent,
    AssetFormComponent,
    UserSignupComponent,
    UserLoginComponent,
    AssetComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AssetService, CoinService, ExchangeService, UserService, AuthenticationService, AuthGuard, GlobalEventsManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
