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
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [ CreateMatchComponent, EventsComponent, CommentaryComponent, StatisticsComponent, LineUpComponent, AdminComponent],
  imports: [
    AdminRoutingModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [ AdminComponent,CreateMatchComponent, EventsComponent, CommentaryComponent, StatisticsComponent, LineUpComponent],
  bootstrap: [],

})
export class AdminModule { }
