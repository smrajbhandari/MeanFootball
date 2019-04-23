import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatchDetailService } from 'src/app/service/match-detail.service';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-line-up',
  templateUrl: './line-up.component.html',
  styleUrls: ['./line-up.component.scss']
})
export class LineUpComponent implements OnInit {
  myForm: FormGroup;

  sides: string[] = ['HOME', 'AWAY'];
  private matchId:string;
  private matchObj: Object = {};

  minute: Number;
  constructor(private formBuilder: FormBuilder, private matchDetailService: MatchDetailService,private matchService:MatchService) {
    this.myForm = formBuilder.group({
      'side': ['', Validators.required],
      'playerIn': ['', Validators.required],
      'playerOut': ['', Validators.required]

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
    const substitute = this.myForm.value;
    substitute.minute = this.minute;
    this.matchService.addSubstitute(this.matchId,substitute)
      .subscribe(data => {
       // this.router.navigateByUrl('login');
       console.log("saved");
      }, error => {
        console.log(error);
      });
  }

}
