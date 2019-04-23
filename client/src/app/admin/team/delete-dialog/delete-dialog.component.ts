import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Team,
    private teamService: TeamService
  ) {}

  ngOnInit() {
  }

  onDelete() {
    this.teamService.delete(this.data._id)
      .subscribe(data => {
        this.dialogRef.close(data)
      }, err => {
        console.log(err);
      });
  }
}
