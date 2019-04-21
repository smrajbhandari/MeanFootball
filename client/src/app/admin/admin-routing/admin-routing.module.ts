import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateMatchComponent } from '../create-match/create-match.component';
import { EventsComponent } from '../events/events.component';
import { LineUpComponent } from '../line-up/line-up.component';
import { StatisticsComponent } from '../statistics/statistics.component';
import { CommentaryComponent } from '../commentary/commentary.component';
import { AdminComponent } from '../admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'events',
        component: EventsComponent,
      },
      {
        path: 'lineUp',
        component: LineUpComponent,
      },
      {
        path: 'statistics',
        component: StatisticsComponent,
      },
      {
        path: 'commentary',
        component: CommentaryComponent,
      }
    ]
  },
  {
    path:'create',
    component:CreateMatchComponent
  }

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]

})
export class AdminRoutingModule { }
