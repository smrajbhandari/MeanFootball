import {NgModule} from '@angular/core';

import {
 MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,MatTabsModule,MatGridListModule
  ],
  exports: [
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class MaterialModule {}
