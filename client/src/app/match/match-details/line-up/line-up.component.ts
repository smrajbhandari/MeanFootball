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
      this.match= this.matchDetailService.getCurrentMatchObj();
     }

  ngOnInit() {
    this.match= this.matchDetailService.getCurrentMatchObj();
  }

}
