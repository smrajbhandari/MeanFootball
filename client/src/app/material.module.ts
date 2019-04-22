import {NgModule} from '@angular/core';

import {
 MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatRadioModule,
    MatTableModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatTabsModule,
    MatSnackBarModule,
    MatRadioModule
  ],
  exports: [
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatRadioModule,
    MatTableModule
  ]
})
export class MaterialModule {}
