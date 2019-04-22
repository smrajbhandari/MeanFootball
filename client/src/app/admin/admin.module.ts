import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMatchComponent } from './create-match/create-match.component';
import { MaterialModule } from '../material.module';
import { EventsComponent } from './events/events.component';
import { CommentaryComponent } from './commentary/commentary.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { LineUpComponent } from './line-up/line-up.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { AdminComponent } from './admin.component';
import { MatchUpdateComponent } from './match-update/match-update.component';




@NgModule({
  declarations: [AdminComponent, CreateMatchComponent, EventsComponent, CommentaryComponent, StatisticsComponent, LineUpComponent, AdminComponent, MatchUpdateComponent],
  imports: [
    AdminRoutingModule,
    CommonModule,
    MaterialModule
  ],
  exports: [AdminRoutingModule, AdminComponent,CreateMatchComponent, EventsComponent, CommentaryComponent, StatisticsComponent, LineUpComponent,MatchUpdateComponent],
  bootstrap: [],

})
export class AdminModule { }
