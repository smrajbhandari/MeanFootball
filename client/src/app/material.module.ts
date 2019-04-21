import {NgModule} from '@angular/core';

import {
 MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,MatTabsModule
  ],
  exports: [
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ]
})
export class MaterialModule {}
