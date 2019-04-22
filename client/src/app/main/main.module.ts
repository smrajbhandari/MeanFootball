import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MaterialModule } from '../material.module';
import { MatchModule } from '../match/match.module';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatchModule,
    AdminModule
  ],
  exports: [ MainComponent],
  bootstrap: [],

})
export class MainModule { }
