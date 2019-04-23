import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LogoutComponent>,public router: Router,    private snackBar: MatSnackBar    ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.snackBar.open("You are the best !!!    😊😊😊", 'Close', { duration: 3000 });
    this.dialogRef.close();
  }

  onYesClick(){
    localStorage.clear();
    this.router.navigate(['login']);
    this.dialogRef.close();

  }

}
