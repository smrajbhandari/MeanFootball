import { Component, OnInit, Input, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MatchDetailService } from 'src/app/service/match-detail.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})

export class TrackerComponent implements OnInit, AfterViewInit {
  private displayedColumns: string[] = ['minute', 'message'];
  private dataSourceCommentaries = new MatTableDataSource<messageSTR>([]);
  @ViewChild(MatPaginator) paginator2: MatPaginator;

  constructor(private cdr: ChangeDetectorRef,private matchDetailService:MatchDetailService) {
    // this.dataSourceCommentaries.paginator = this.paginator2;
     //this.dataSourceCommentaries=this.matchDetailService.getCurrentMatchObj().commentaries;
     //this.dataSourceCommentaries.paginator = this.paginator2;
     
     setTimeout(() => {
       this.dataSourceCommentaries.paginator = this.paginator2;
       this.cdr.detectChanges();
      },0);
   }

  ngOnInit() {
    this.dataSourceCommentaries=this.matchDetailService.getCurrentMatchObj().commentaries;
    this.dataSourceCommentaries.paginator = this.paginator2;
    this.cdr.detectChanges();
    setTimeout(() => this.dataSourceCommentaries.paginator = this.paginator2,0);
    // this.dataSourceCommentaries.paginator = this.paginator;
    this.matchDetailService.emitter.subscribe(
      data => {
          this.dataSourceCommentaries = new MatTableDataSource<messageSTR>(data.commentaries);
          this.dataSourceCommentaries.paginator = this.paginator2
          setTimeout(() => this.dataSourceCommentaries.paginator = this.paginator2,1);
          this.cdr.detectChanges();
      });
  }
  ngAfterViewInit(){
    // console.log("hoila");
    // console.log(this.dataSourceCommentaries.paginator);
    this.dataSourceCommentaries.paginator = this.paginator2;
    this.cdr.detectChanges();
    }
}
export interface messageSTR {
  minute: Number,
      message: String
}
