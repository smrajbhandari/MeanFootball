import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatchDetailService } from 'src/app/service/match-detail.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {
  public message1;
  @Input() message2;
  @Input() message3;
  constructor(private matchDetailService:MatchDetailService) { }
  displayedColumns: string[] = ['minute', 'message'];
  dataSourceCommentaries = new MatTableDataSource<[{minute: Number,message: String}]>([]);


  ngOnInit() {
    console.log("adsf");
    console.log(JSON.stringify(this.message2));

    this.matchDetailService.emitter.subscribe(
      data => {
          // this.matchId = data._id;
          // this.match=data;
        //   console.log(data);
          //   this.dataSourceEvents=data.events;
          // this.dataSourceEvents=new MatTableDataSource<eventSTR>(data.events);
          // this.dataSourceEvents.paginator = this.paginator;
        //   this.message2=new MatTableDataSource<[{minute: Number,message: String}]>(data.commentaries);
          this.message2=data.commentaries;
          console.log(this.message2);
      });

    // this.dataSourceCommentaries=new MatTableDataSource<[{minute: Number,message: String}]>(this.message2);
    //this.dataSourceEvents.paginator = this.paginator;
  }

}
