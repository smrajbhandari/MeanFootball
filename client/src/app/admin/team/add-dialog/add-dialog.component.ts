import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Team } from 'src/app/models/team';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {
  myForm: FormGroup;
  submitted: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Team,
    private formBuilder: FormBuilder,
    private teamService: TeamService
  ) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'coach': ['', Validators.required],
      'players': this.formBuilder.array([
        this.buildPlayerFields()
      ])
    });
  }

  buildPlayerFields() {
    return this.formBuilder.group({
      'name': ['', Validators.required],
      'position': ['', Validators.required],
      'number': ['', Validators.required],
      'substitute': [false, Validators.required]
    });
  }

  addPlayer() {
    const control = <FormArray>this.myForm.controls['players'];
    control.push(this.buildPlayerFields());
  }

  removePlayer(index: number) {
    const players = <FormArray>this.myForm.controls['players'];
    players.removeAt(index);
  }

  get f() { return this.myForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.myForm.invalid) {
      return;
    }

    const team: Team = this.myForm.value;

    this.teamService.create(team)
      .subscribe(data => {
        this.dialogRef.close(data)
      }, err => {
        console.log(err);
      });
  }
}
