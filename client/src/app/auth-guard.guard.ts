import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatSnackBar } from '@angular/material';
const helper = new JwtHelperService();

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor( 
    public router: Router,
    private snackBar: MatSnackBar
  ) {}

  canActivate(): boolean {
    const token = localStorage.getItem('_token');
    if (!(helper.decodeToken(token) && helper.decodeToken(token).email)) {
      this.router.navigate(['login']);
      this.snackBar.open('Please login to continue!', 'Close', { duration: 3000 });

      return false;
    }
    return true;
  }
}
