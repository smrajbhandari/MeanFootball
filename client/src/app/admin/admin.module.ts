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
import { TeamComponent } from './team/team.component';
import { AddDialogComponent } from './team/add-dialog/add-dialog.component';
import { EditDialogComponent } from './team/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './team/delete-dialog/delete-dialog.component';




@NgModule({
  declarations: [
    AdminComponent, 
    CreateMatchComponent, 
    EventsComponent, 
    CommentaryComponent, 
    StatisticsComponent, 
    LineUpComponent, 
    AdminComponent, 
    TeamComponent, 
    AddDialogComponent, 
    EditDialogComponent, 
    DeleteDialogComponent,
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [AdminRoutingModule, AdminComponent,CreateMatchComponent, EventsComponent, CommentaryComponent, StatisticsComponent, LineUpComponent],
  bootstrap: [],
  entryComponents: [
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent
  ]

})
export class AdminModule { }
