import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatchDetailService } from 'src/app/service/match-detail.service';
import { MatchService } from 'src/app/service/match.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-line-up',
  templateUrl: './line-up.component.html',
  styleUrls: ['./line-up.component.scss']
})
export class LineUpComponent implements OnInit {
  myForm: FormGroup;

  sides: string[] = ['HOME', 'AWAY'];
  private matchObj: any;

  minute: Number;
  constructor(private formBuilder: FormBuilder, private matchDetailService: MatchDetailService,
    private snackBar: MatSnackBar,
    private matchService:MatchService) {
    this.myForm = formBuilder.group({
      'side': ['', Validators.required],
      'playerIn': ['', Validators.required],
      'playerOut': ['', Validators.required]

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
    const substitute = this.myForm.value;
    substitute.minute = this.minute;
    this.matchService.addSubstitute(this.matchObj._id,substitute)
      .subscribe(data => {
       this.myForm.reset();
       this.snackBar.open("Data Saved !!!", 'Close', { duration: 3000 });

      }, error => {
        console.log(error);
      });
  }

}
