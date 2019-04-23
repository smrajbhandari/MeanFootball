import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  private matchObj: Object = {};
  private matchId:string;
  constructor(private formBuilder: FormBuilder,private matchDetailService: MatchDetailService,private matchService:MatchService) {
    
    this.myForm=formBuilder.group({
      'message': ['', Validators.required]

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
    const commentary = this.myForm.value;
    commentary.minute = this.minute;
    this.matchService.addCommentary(this.matchId,commentary)
      .subscribe(data => {
       console.log("saved");
      }, error => {
        console.log(error);
      });
  }
}
