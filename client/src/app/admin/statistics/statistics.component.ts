import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchUpdateService } from '../match-update.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private matchUpdate: MatchUpdateService) {
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
  }
  ngOnInit() {
  }

  onSubmit() {
    const event = this.myForm.value;
    console.log("event----->> "+event.shotsOnTargetHome);
  }
}
