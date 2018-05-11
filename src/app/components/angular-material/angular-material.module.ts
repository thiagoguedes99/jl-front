import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import {
  MatMenuModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatTabsModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    // CommonModule
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule
  ],
  exports: [
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule
  ]
  // declarations: []
})
export class AngularMaterialModule { }
