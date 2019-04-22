import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './match.component';
import { ListMatchesComponent } from './list-matches/list-matches.component';
import { MatchDetailsComponent } from './match-details/match-details.component';

@NgModule({
  declarations: [MatchComponent, ListMatchesComponent, MatchDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [MatchComponent, ListMatchesComponent, MatchDetailsComponent],
  bootstrap: [],
})
export class MatchModule { }
