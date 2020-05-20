import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { AngularMaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';
import { LayoutComponent } from '../layout/layout.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    AngularMaterialModule,
    FlexLayoutModule,
    SuccessDialogComponent,
    ErrorDialogComponent,
    LayoutComponent
  ],
  entryComponents: [
    SuccessDialogComponent,
    ErrorDialogComponent
  ]
})
export class SharedModule { }
