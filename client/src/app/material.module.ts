import {NgModule} from '@angular/core';

import {
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
    MatOptionModule,
    MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatTabsModule,
    MatRadioModule,
    MatGridListModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule
  ],
  exports: [
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
    MatOptionModule,
    MatSelectModule
  ]
})
export class MaterialModule {}
