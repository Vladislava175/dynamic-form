import { DynamicFormComponent } from './dynamic-form/dynamic-form';
import { Component, ViewChild } from '@angular/core';
import { FieldConfig } from './dynamic-form/models/field-config';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
 <div class="app">
      <dynamic-form
        [config]="config"
        #form="dynamicForm"
        (submit)="submit($event)">
      </dynamic-form>
      {{ form.valid }}
      {{ form.value | json }}
    </div>
  `,
  styles: []
})
export class AppComponent {
  @ViewChild(DynamicFormComponent) form!: DynamicFormComponent;
  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'First name',
      name: 'firstName',
      placeholder: 'Enter your first name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'input',
      label: 'Last name',
      name: 'lastName',
      placeholder: 'Enter your last name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'select',
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);
    // this.form.setValue('firstName', 'Todd Motto');
    this.form.patchValue({'firstName':'Vlada', 'lastName':'Zhyg'})
  }

  submit(value: {[name: string]: any}) {
    console.log(value);
  }
}
