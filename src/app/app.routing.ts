import { AssetComponent } from './asset/asset.component';
import { AuthGuard } from './guards/auth.guard';
import { AssetListComponent } from './asset/asset-list/asset-list.component';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', component: UserLoginComponent },
    { path: 'login', component: UserLoginComponent },
    { path: 'signup', component: UserSignupComponent },
    { path: 'assets', component: AssetComponent, canActivate: [AuthGuard]},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
