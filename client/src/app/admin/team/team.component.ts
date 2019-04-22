import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/services/team.service';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  displayedColumns: string[] = ['name', 'coach', 'actions'];
  teams: Team[];
  dataSource = new TeamDataSource(this.teamService);

  constructor(
    private dialog: MatDialog,
    private teamService: TeamService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }

  onAdd(): void {
    const dialogRef = this.dialog.open(AddDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open('Team created successfully', 'Close', { duration: 3000 });
        this.dataSource = new TeamDataSource(this.teamService);
      }
    });
  }

  onEdit(team: Team): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: team
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open('Team updated successfully', 'Close', { duration: 3000 });
        this.dataSource = new TeamDataSource(this.teamService);
      }
    });
  }

  onDelete(team: Team): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: team
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open('Team deleted successfully', 'Close', { duration: 3000 });
        this.dataSource = new TeamDataSource(this.teamService);
      }
    });
  }
}

export class TeamDataSource extends DataSource<any> {
  constructor(private teamService: TeamService) {
    super();
  }
  connect(): Observable<Team[]> {
    return this.teamService.findAll();
  }
  disconnect() {}
}