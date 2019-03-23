import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FieldComponent } from './field/field.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ErrorComponent, FieldComponent],
  exports: [
    ErrorComponent, FieldComponent]
})
export class WidgetsModule {
}
