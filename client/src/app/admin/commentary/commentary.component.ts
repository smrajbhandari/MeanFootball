import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, SelectMultipleControlValueAccessor } from '@angular/forms';
import { MatchDetailService } from 'src/app/service/match-detail.service';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.scss']
})
export class CommentaryComponent implements OnInit {
  myForm: FormGroup;
  minute:Number;
  private matchObj: any;
  constructor(private formBuilder: FormBuilder,private matchDetailService: MatchDetailService,private matchService:MatchService) {
    
    this.myForm=formBuilder.group({
      'message': ['', Validators.required]

    });
    this.matchObj=this.matchDetailService.getCurrentMatchObj();
  }
  ngOnInit() {
    this.matchDetailService.emitter.subscribe(
      data => {
        this.matchObj = data;
        this.minute = Math.floor(Math.abs(((new Date(this.matchObj.startDateTime).getTime()) - (new Date()).getTime()) / 60000));
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
    const commentary = this.myForm.value;
    commentary.minute = this.minute;
    this.matchService.addCommentary(this.matchObj._id,commentary)
      .subscribe(data => {
       this.myForm.reset();
       this.myForm.markAsUntouched;
      }, error => {
        console.log(error);
      });
  }
}
