import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MaterialModule } from '../material.module';
import { AdminRoutingModule } from '../admin/admin-routing/admin-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    AdminRoutingModule,
    CommonModule,
    MaterialModule
  ],
  exports: [ MainComponent],
  bootstrap: [],

})
export class MainModule { }
