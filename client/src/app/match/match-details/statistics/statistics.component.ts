import { Component, OnInit } from '@angular/core';
import { MatchDetailService } from 'src/app/service/match-detail.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(private matchDetailService:MatchDetailService) { }
  public dataStatistic:{
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
      data =>
      {
          setTimeout(() =>{
          if(data.statistic ==null)
          {
            console.log('is null');
            this.dataStatistic ={
              shotsOnTarget: {homeTeam: 0,awayTeam: 0},
              shotsOffTarget: {homeTeam: 0,   awayTeam: 0   },
              possession: {   homeTeam: 0,   awayTeam: 0   },
              corners: {   homeTeam: 0,   awayTeam: 0   },
              offsides: {   homeTeam: 0,   awayTeam: 0   },
              fouls: {   homeTeam: 0,   awayTeam: 0   },
              goalKicks: {   homeTeam: 0,   awayTeam: 0   }
            }
          }
          else{
            this.dataStatistic =data.statistic[data.statistic.length-1];
          }
          //setTimeout(()=>this.dataStatistic=this.dataStatistic,0)
          });
      } );
  }

}
