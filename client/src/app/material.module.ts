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
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    MatOptionModule
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
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    MatOptionModule
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
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    MatOptionModule
  ]
})
export class MaterialModule {}
