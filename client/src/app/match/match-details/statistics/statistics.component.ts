import { Component, OnInit } from '@angular/core';
import { MatchDetailService } from 'src/app/service/match-detail.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(private matchDetailService:MatchDetailService) { }
  dataStatistic:{
    shotsOnTarget: {
        homeTeam: Number,
        awayTeam: Number
    },
    shotsOffTarget: {
        homeTeam: Number,
        awayTeam: Number
    },
    possession: {
        homeTeam: Number,
        awayTeam: Number
    },
    corners: {
        homeTeam: Number,
        awayTeam: Number
    },
    offsides: {
        homeTeam: Number,
        awayTeam: Number
    },
    fouls: {
        homeTeam: Number,
        awayTeam: Number
    },
    goalKicks: {
        homeTeam: Number,
        awayTeam: Number
    }
}

  ngOnInit() {
    this.matchDetailService.emitter.subscribe(
      data => {
          this.dataStatistic =data.statistic;
          //this.dataStatistic.corners
      });
  }

}
