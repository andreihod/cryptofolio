import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';

import { AuthenticationService } from './../authentication/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService,
  private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (this.authenticationService.isUsuarioAutenticado()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;

  }

}
