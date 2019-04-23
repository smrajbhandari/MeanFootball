import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  isAdmin:boolean;
  constructor(public router: Router, private userService:UserService) {}
  canActivate(): boolean {
    let value=localStorage.getItem("isAdmin");
    if (!(value==="true")) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  };


}
