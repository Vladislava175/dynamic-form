import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Field } from "../models/field";
import { FieldConfig } from "../models/field-config";

@Component({
    selector: 'form-input',
    styles: [`input {
        display: block;
        font-family: inherit;
        font-size: 14px;
        width: 100%;
        border: 1px solid rgba(0, 0, 0, 0.1);
        outline: none;
        padding: 10px 15px;
        color: rgba(0, 0, 0, 0.7);
        &:focus {
          border: 1px solid rgba(0, 0, 0, 0.4);
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        }
      }`],
    template: `
      <div 
        class="dynamic-field form-input" 
        [formGroup]="group">
        <label>{{ config.label }}</label>
        <input
          type="text"
          [attr.placeholder]="config.placeholder"
          [formControlName]="config.name">
      </div>
    `
  })
  export class FormInputComponent implements Field {
    config!: FieldConfig;
    group!: FormGroup;
  }