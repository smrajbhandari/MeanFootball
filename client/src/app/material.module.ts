import {NgModule} from '@angular/core';

import {
    MatButtonModule, MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,MatTabsModule
  ],
  exports: [
    MatButtonModule,MatTabsModule
  ]
})
export class MaterialModule {}
