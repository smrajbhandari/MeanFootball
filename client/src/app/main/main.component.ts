import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  show: boolean;

  constructor(public dialog: MatDialog) { 
    let value=localStorage.getItem("isAdmin");
    if (value==="true") {
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
