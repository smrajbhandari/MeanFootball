import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './match.component';
import { ListMatchesComponent } from './list-matches/list-matches.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [MatchComponent, 
    ListMatchesComponent, 
    MatchDetailsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [MatchComponent, ListMatchesComponent, MatchDetailsComponent],
  bootstrap: [],
})
export class MatchModule { }
