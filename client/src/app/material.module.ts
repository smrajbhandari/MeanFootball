import {NgModule} from '@angular/core';

import {
 MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatTabsModule,
    MatSnackBarModule
  ],
  exports: [
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule
  ]
})
export class MaterialModule {}
