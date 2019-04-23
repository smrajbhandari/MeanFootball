import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {

  isAdmin:boolean;
  constructor(public router: Router, private userService:UserService) {}
  canActivate(): boolean {
    const token = localStorage.getItem('_token');
    if (!(helper.decodeToken(token) && helper.decodeToken(token).isAdmin)) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  };


}
