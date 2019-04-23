import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Match } from 'src/app/models/match';
import { MatchService } from 'src/app/service/match.service';
import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/services/team.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss']
})
export class CreateMatchComponent implements OnInit {
  myForm: FormGroup;
  submitted: boolean = false;
  teams: Team[];

  constructor(
    private formBuilder: FormBuilder,
    private matchService: MatchService,
    private teamService: TeamService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      'leagueName': ['', Validators.required],
      'startDateTime': ['', Validators.required],
      'homeTeamId': ['', Validators.required],
      'awayTeamId': ['', Validators.required]
    });

    this.teamService.findAll()
      .subscribe((data: Team[]) => {
        this.teams = data;
      })
  }

  get f() { return this.myForm.controls; }

  onSubmit() {
    this.submitted = true;
     
    if (this.myForm.invalid) {
      return;
    }

    const match: Match = this.myForm.value;
    const homeTeamId = this.myForm.controls['homeTeamId'].value;
    const awayTeamId = this.myForm.controls['awayTeamId'].value;

    match.homeTeam = this.teams.find(t => t._id === homeTeamId);
    match.awayTeam = this.teams.find(t => t._id === awayTeamId);

    this.matchService.create(match)
      .subscribe(data => {
        this.router.navigateByUrl('main');
        this.snackBar.open('Match created successfully', 'Close', { duration: 3000 });
      }, err => {
        console.log(err);
      });
  }
}
