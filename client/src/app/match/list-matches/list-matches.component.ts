import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import {MatchService} from '../../match.service';



@Component({
  selector: 'app-list-matches',
  templateUrl: './list-matches.component.html',
  styleUrls: ['./list-matches.component.scss']
})
export class ListMatchesComponent implements OnInit {
   displayedColumns: string[] = ['st','leagueName','homeTeam', 'awayTeam' ];
   dataSource:any;

  constructor(private matchService:MatchService) { 
    this.matchService.findAll().subscribe(
      data=>{
      console.log(data);
      this.dataSource = data;
      }) ;
  }

  getRecord(element:any){
    console.log("here your request BOOSSS");
    console.log(element._id);
  }

  ngOnInit() {
    
  }

}



