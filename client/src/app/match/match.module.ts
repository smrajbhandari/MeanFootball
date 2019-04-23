import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './match.component';
import { ListMatchesComponent } from './list-matches/list-matches.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import {MaterialModule} from '../material.module';
import { TrackerComponent } from './match-details/tracker/tracker.component';
import { StatisticsComponent } from './match-details/statistics/statistics.component';
import { LineUpComponent } from './match-details/line-up/line-up.component';
//import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [MatchComponent, 
    ListMatchesComponent, 
    MatchDetailsComponent, TrackerComponent, StatisticsComponent, LineUpComponent],
  imports: [
     CommonModule,MaterialModule
     //,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule
  ],
  exports: [MatchComponent, ListMatchesComponent, MatchDetailsComponent],
  bootstrap: [],
})
export class MatchModule { }
