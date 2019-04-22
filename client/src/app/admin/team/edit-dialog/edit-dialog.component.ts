import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Team } from 'src/app/models/team';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  myForm: FormGroup;
  submitted: boolean = false;
  team: Observable<Team>;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Team,
    private formBuilder: FormBuilder,
    private teamService: TeamService
  ) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'coach': ['', Validators.required]
    });

    this.team = this.teamService.findOne(this.data._id)
      .pipe(tap(team => this.myForm.patchValue(team)));
  }

  get f() { return this.myForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.myForm.invalid) {
      return;
    }

    const team: Team = this.myForm.value;
    team._id = this.data._id;

    this.teamService.update(team)
      .subscribe(data => {
        this.dialogRef.close(data)
      }, err => {
        console.log(err);
      });
  }
}
