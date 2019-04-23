import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateMatchComponent } from '../create-match/create-match.component';
import { EventsComponent } from '../events/events.component';
import { LineUpComponent } from '../line-up/line-up.component';
import { StatisticsComponent } from '../statistics/statistics.component';
import { CommentaryComponent } from '../commentary/commentary.component';
import { TeamComponent } from '../team/team.component';
import { MainComponent } from 'src/app/main/main.component';
import { AdminGuardGuard } from 'src/app/admin-guard.guard';
// import { AdminComponent } from '../admin.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'events',
        component: EventsComponent,
        canActivate: [AdminGuardGuard]
      },
      {
        path: 'lineUp',
        component: LineUpComponent,
        canActivate: [AdminGuardGuard]
      },
      {
        path: 'statistics',
        component: StatisticsComponent,
        canActivate: [AdminGuardGuard]
      },
      {
        path: 'commentary',
        component: CommentaryComponent,
        canActivate: [AdminGuardGuard]
      }
    ]
  },
  {
    path:'create',
    component:CreateMatchComponent,
    canActivate: [AdminGuardGuard]
  },
  { 
    path: 'teams', 
    component: TeamComponent,
    canActivate: [AdminGuardGuard]
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
