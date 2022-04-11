import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormButtonComponent } from './dynamic-form/components/button.component';
import { FormInputComponent } from './dynamic-form/components/input.component';
import { FormSelectComponent } from './dynamic-form/components/select.component';
import { DynamicFieldDirective } from './dynamic-form/directives/dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-form/dynamic-form';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  exports: [DynamicFormComponent],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
