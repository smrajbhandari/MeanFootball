import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchDetailService } from 'src/app/service/match-detail.service';
import { MatchService } from 'src/app/service/match.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  myForm: FormGroup;
  private matchObj: any;
  constructor(private formBuilder: FormBuilder,private matchDetailService: MatchDetailService,
    private snackBar: MatSnackBar,
    private matchService:MatchService) {
    this.myForm = formBuilder.group({
      'shotsOnTargetHome': ['', Validators.required],
      'shotsOnTargetAway': ['', Validators.required],
      'shotsOffTargetHome': ['', Validators.required],
      'shotsOffTargetAway': ['', Validators.required],
      'possessionHome': ['', Validators.required],
      'possessionAway': ['', Validators.required],
      'cornersHome': ['', Validators.required],
      'cornersAway': ['', Validators.required],
      'offsidesHome': ['', Validators.required],
      'offsidesAway': ['', Validators.required],
      'foulsHome': ['', Validators.required],
      'foulsAway': ['', Validators.required],
      'goalKicksHome': ['', Validators.required],
      'goalKicksAway': ['', Validators.required],


    });

    this.matchObj=this.matchDetailService.getCurrentMatchObj();

  }
  ngOnInit() {
    this.matchDetailService.emitter.subscribe(
      data => {
        this.matchObj = data;
      }
    );
  }

  onSubmit() {
    if (this.myForm.invalid) {
      return;
    }
    const statistics = this.myForm.value;
    this.matchService.addStatistics(this.matchObj._id,statistics)
      .subscribe(data => {
        this.myForm.reset();
        this.snackBar.open("Data Saved !!!", 'Close', { duration: 3000 });

      }, error => {
        console.log(error);
      });
  }
}
