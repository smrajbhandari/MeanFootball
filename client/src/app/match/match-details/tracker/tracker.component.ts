import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MatchDetailService } from 'src/app/service/match-detail.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})

export class TrackerComponent implements OnInit {
  constructor(private matchDetailService:MatchDetailService) {
    this.dataSourceCommentaries.paginator = this.paginator;
   }
  displayedColumns: string[] = ['minute', 'message'];
  dataSourceCommentaries = new MatTableDataSource<[]>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    // this.dataSourceCommentaries.paginator = this.paginator;
    this.matchDetailService.emitter.subscribe(
      data => {
          this.dataSourceCommentaries = new MatTableDataSource<[]>(data.commentaries);
          setTimeout(() => this.dataSourceCommentaries.paginator = this.paginator,0);
      });
  }

}
