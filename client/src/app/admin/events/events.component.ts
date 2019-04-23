import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatchDetailService } from 'src/app/service/match-detail.service';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  myForm: FormGroup;
  types: string[] = ['Red Card', 'Yellow Card', 'Goal', 'Own Goal'];
  private matchObj: Object = {};
  private matchId:string;
  minute:Number;
  constructor(private formBuilder: FormBuilder,private matchDetailService: MatchDetailService,private matchService:MatchService) {

    this.myForm=formBuilder.group({
      'player': ['', Validators.required],
      'type': ['', Validators.required],
      'homeScore': ['', Validators.required],
      'awayScore': ['', Validators.required]

    });


   }

  ngOnInit() {
    this.matchDetailService.emitter.subscribe(
      data => {
        this.matchObj = data;
        this.matchId=data._id;
        this.minute = Math.floor(Math.abs(((new Date(data.startDateTime).getTime()) - (new Date()).getTime()) / 60000));

      }
    );
  }


  onSubmit() {
    if (this.myForm.invalid) {
      return;
    }
    const event = this.myForm.value;
    event.minute = this.minute;
    this.matchService.addEvent(this.matchId,event)
      .subscribe(data => {
       console.log("saved");
      }, error => {
        console.log(error);
      });
  }
}
