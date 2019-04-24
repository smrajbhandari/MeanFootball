import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LogoutComponent } from '../logout/logout.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormControl } from '@angular/forms';
const helper = new JwtHelperService();

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  show: boolean;

  mode = new FormControl('side');
//  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  constructor(public dialog: MatDialog) { 
    const token = localStorage.getItem('_token');
    if (helper.decodeToken(token) && helper.decodeToken(token).isAdmin) {
      this.show=true;
    }
    else{
      this.show=false;
    }
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(LogoutComponent, {
      width: '350px',
    });
  }

  ngOnInit() {
  }

}
