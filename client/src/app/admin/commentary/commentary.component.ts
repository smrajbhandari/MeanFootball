import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatchUpdateService } from '../match-update.service';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.scss']
})
export class CommentaryComponent implements OnInit {
  myForm: FormGroup;
  minute:Number;
   time1=new Date(2019, 4, 21, 4, 10, 0, 0);
   time2=new Date(2019, 4, 21, 4, 17, 0, 0);
  constructor(private formBuilder: FormBuilder, private matchUpdate: MatchUpdateService) {
    
    this.myForm=formBuilder.group({
      // 'minute': [ Math.abs((time1.getTime() - time2.getTime()) / 60000), Validators.required],
      'message': ['', Validators.required]

    });


  }
  ngOnInit() {
    this.minute =Math.abs((this.time1.getTime() - this.time2.getTime()) / 60000);

  }
  onSubmit() {
    const commentary = this.myForm.value;
    commentary.minute=this.minute;
    console.log("event----->> "+commentary.minute);
    console.log("event----->> "+commentary.message);

  }
}
