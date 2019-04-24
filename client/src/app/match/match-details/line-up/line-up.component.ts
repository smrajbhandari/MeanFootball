import { Component, OnInit } from '@angular/core';
import { MatchDetailService } from 'src/app/service/match-detail.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-line-up',
  templateUrl: './line-up.component.html',
  styleUrls: ['./line-up.component.scss']
})
export class LineUpComponent implements OnInit {
  matchId:String;
  public match:any;

  constructor(private matchDetailService:MatchDetailService,
    private teamService: TeamService) {
      this.match= this.matchDetailService.getCurrentMatchLineup();
     }

  ngOnInit() {
    this.match= this.matchDetailService.getCurrentMatchLineup();
    this.matchDetailService.emitter.subscribe(data=>{
      this.match=data;
    });
    //console.log(this.match);
  }

}
