import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', component: UserLoginComponent },
    { path: 'login', component: UserLoginComponent },
    { path: 'signup', component: UserSignupComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);