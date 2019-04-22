import {NgModule} from '@angular/core';

import {
 MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatTableModule,
    MatGridListModule,
    MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatTabsModule,
    MatRadioModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  exports: [
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatTableModule,
    MatGridListModule,
    MatSnackBarModule
  ]
})
export class MaterialModule {}
