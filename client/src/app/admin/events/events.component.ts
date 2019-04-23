import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatchDetailService } from 'src/app/service/match-detail.service';
import { MatchService } from 'src/app/service/match.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  myForm: FormGroup;
  types: string[] = ['Red Card', 'Yellow Card', 'Goal', 'Own Goal'];
  private matchObj: any;
  minute:Number;
  constructor(private formBuilder: FormBuilder,private matchDetailService: MatchDetailService,
    private snackBar: MatSnackBar,
    private matchService:MatchService
    ) {

    this.myForm=formBuilder.group({
      'player': ['', Validators.required],
      'type': ['', Validators.required],
      'homeScore': ['', Validators.required],
      'awayScore': ['', Validators.required]

    });

    this.matchObj=this.matchDetailService.getCurrentMatchObj();

   }

  ngOnInit() {
    this.matchDetailService.emitter.subscribe(
      data => {
        this.matchObj = data;
        this.minute = Math.floor(Math.abs(((new Date(data.startDateTime).getTime()) - (new Date()).getTime()) / 60000));
      }
    );

    this.matchDetailService.minuteEmitter.subscribe(
      data => {
        this.minute = data;
      }
    );
  }


  onSubmit() {
    if (this.myForm.invalid) {
      return;
    }
    const event = this.myForm.value;
    event.minute = this.minute;
    this.matchService.addEvent(this.matchObj._id,event)
      .subscribe(data => {
        this.myForm.reset();
        this.snackBar.open("Data Saved !!!", 'Close', { duration: 3000 });

      }, error => {
        console.log(error);
      });
  }
}
