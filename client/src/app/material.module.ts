import {NgModule} from '@angular/core';

import {
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
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
    MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
    MatButtonModule,
    MatTabsModule,
    MatRadioModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  exports: [
    MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
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
