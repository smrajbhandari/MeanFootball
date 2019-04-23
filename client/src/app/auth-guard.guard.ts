import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor( public router: Router) {}
  canActivate(): boolean {
    const token = localStorage.getItem('_token');
    if (!(helper.decodeToken(token) && helper.decodeToken(token).email)) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
