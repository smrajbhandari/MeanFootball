import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatchUpdateService } from '../match-update.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  myForm: FormGroup;
  types: string[] = ['Red Card', 'Yellow Card', 'Goal', 'Own Goal'];

  constructor(private formBuilder: FormBuilder, private matchUpdate: MatchUpdateService) {

    this.myForm=formBuilder.group({
      'minute': ['', Validators.required],
      'player': ['', Validators.required],
      'type': ['', Validators.required],
      'homeScore': ['', Validators.required],
      'awayScore': ['', Validators.required]

    });


   }

  ngOnInit() {
  }


  onSubmit() {
    const event = this.myForm.value;
    console.log("event----->> "+event.type);
  }
}
