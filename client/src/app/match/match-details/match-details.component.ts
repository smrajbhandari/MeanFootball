import { Component, OnInit } from '@angular/core';
import { MatchDetailService } from 'src/app/service/match-detail.service';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})
export class MatchDetailsComponent implements OnInit {

  constructor(private matchDetailService:MatchDetailService) { }
  matchId:String;
  ngOnInit() {
    this.matchDetailService.emitter.subscribe(
      data => {this.matchId = data;
          console.log("MatchDetailsComponent");
          console.log(this.matchId);
          //this.onGet();
      }
  );
  }

}
