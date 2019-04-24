import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MatchDetailService } from 'src/app/service/match-detail.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})

export class TrackerComponent implements OnInit {
  private displayedColumns: string[] = ['minute', 'message'];
  private dataSourceCommentaries = new MatTableDataSource<[]>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private matchDetailService:MatchDetailService) {
    this.dataSourceCommentaries.paginator = this.paginator;
    this.dataSourceCommentaries=this.matchDetailService.getCurrentMatchObj().commentaries;
    this.dataSourceCommentaries.paginator = this.paginator;
    setTimeout(() => this.dataSourceCommentaries.paginator = this.paginator,0);
   }

  ngOnInit() {
    this.dataSourceCommentaries=this.matchDetailService.getCurrentMatchObj().commentaries;
    this.dataSourceCommentaries.paginator = this.paginator;
    setTimeout(() => this.dataSourceCommentaries.paginator = this.paginator,0);
    // this.dataSourceCommentaries.paginator = this.paginator;
    this.matchDetailService.emitter.subscribe(
      data => {
          this.dataSourceCommentaries = new MatTableDataSource<[]>(data.commentaries);
          setTimeout(() => this.dataSourceCommentaries.paginator = this.paginator,1);
      });
  }

}
