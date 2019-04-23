import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent  } from './main.component';
import { MaterialModule } from '../material.module';
import { MatchModule } from '../match/match.module';
import { AdminModule } from '../admin/admin.module';
import { LogoutComponent } from '../logout/logout.component';



@NgModule({
  declarations: [MainComponent, LogoutComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatchModule,
    AdminModule        
  ],
  exports: [ MainComponent],
  bootstrap: [],
  entryComponents: [
    LogoutComponent
  ],
})
export class MainModule { }
