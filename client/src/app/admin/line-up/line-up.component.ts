import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatchUpdateService } from '../match-update.service';

@Component({
  selector: 'app-line-up',
  templateUrl: './line-up.component.html',
  styleUrls: ['./line-up.component.scss']
})
export class LineUpComponent implements OnInit {
  myForm: FormGroup;

  sides: string[] = ['HOME', 'AWAY'];

  minute: Number;
  time1 = new Date(2019, 4, 21, 4, 10, 0, 0);
  time2 = new Date(2019, 4, 21, 4, 17, 0, 0);
  constructor(private formBuilder: FormBuilder, private matchUpdate: MatchUpdateService) {
    this.myForm = formBuilder.group({
      'side': ['', Validators.required],
      'playerIn': ['', Validators.required],
      'playerOut': ['', Validators.required]

    });
  }

  ngOnInit() {
    this.minute = Math.abs((this.time1.getTime() - this.time2.getTime()) / 60000);

  }

  onSubmit() {
    const substitution = this.myForm.value;
    substitution.minute = this.minute;
    console.log("event----->> " + substitution.minute);
    console.log("event----->> " + substitution.side);
    console.log("event----->> " + substitution.playerIn);
    console.log("event----->> " + substitution.playerOut);


  }

}
