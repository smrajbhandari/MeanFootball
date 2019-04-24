import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { MatchDetailService } from 'src/app/service/match-detail.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})

export class MatchDetailsComponent implements OnInit, AfterViewInit  {
    constructor(private matchDetailService:MatchDetailService) { 
        
    }
    displayedColumns: string[] = ['minute', 'player', 'event', 'score'];
    dataSourceEvents = new MatTableDataSource<eventSTR>([]);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    matchId:String;
    match:matchSTR;
  ngOnInit() {
    this.matchDetailService.emitter.subscribe(
      data => {
          this.matchId = data._id;
          this.match=data;
          this.dataSourceEvents=new MatTableDataSource<eventSTR>(data.events);
          setTimeout(() => this.dataSourceEvents.paginator = this.paginator,0);
      }
  );
  
  //this.dataSourceEvents.paginator = this.paginator;
  }
  ngAfterViewInit(){
    this.dataSourceEvents.paginator = this.paginator;
    }
}

export interface eventSTR {
    minute: Number,
        player: String,
        event: String,  // Red, Yellow, Goal
        homeScore: Number,
        awayScore: Number
  }
  export interface matchSTR {
    leagueName: String,
    startDateTime: Date,
    homeTeam: {
        name: String,
        coach: String,
        players: [
            {
                name: String,
                position: String,
                number: Number
            }
        ],
        substitutes: [
            {
                minute: Number,
                playerIn: String,
                playerOut: String
            }
        ]
    },
    awayTeam: {
        name: String,
        coach: String,
        players: [
            {
                name: String,
                position: String,
                number: Number
            }
        ],
        substitutes: [
            {
                minute: Number,
                playerIn: String,
                playerOut: String
            }
        ]
    },
    status: String, // "", FT, HT
    events: [
        {
            minute: Number,
            player: String,
            event: String,  // Red, Yellow, Goal
            homeScore: Number,
            awayScore: Number
        }
    ],
    commentaries: [
        {
            minute: Number,
            message: String
        }
    ],
    statistic: {
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
}