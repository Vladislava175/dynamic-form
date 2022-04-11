import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ElementComponent } from './dynamic-form/components/element.component';
import { DynamicFieldDirective } from './dynamic-form/directives/dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-form/dynamic-form';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    ElementComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  exports: [DynamicFormComponent],
  entryComponents: [
    ElementComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
