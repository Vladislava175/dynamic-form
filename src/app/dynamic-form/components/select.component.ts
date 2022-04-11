import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Field } from "../models/field";
import { FieldConfig } from "../models/field-config";

@Component({
    selector: 'form-select',
    styles:[`select {
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: .01px;
        text-overflow: '';
        overflow: hidden;
        font-family: inherit;
        font-size: 14px;
        padding: 10px 15px;
        border-radius: 0;
        color: rgba(0, 0, 0, 0.7);
        border: 1px solid rgba(0, 0, 0, 0.1);
        width: 100%;
        outline: none;
        background:
          linear-gradient(45deg, transparent 50%, rgba(0, 0, 0, 0.7) 50%)
            no-repeat calc(100% - 20px) calc(1em + 4px),
          linear-gradient(135deg, rgba(0, 0, 0, 0.7) 50%, transparent 50%)
            no-repeat calc(100% - 15px) calc(1em + 4px);
        background-size: 5px 5px, 5px 5px;
        &:focus {
          border: 1px solid rgba(0, 0, 0, 0.4);
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        }
      }`],
    template: `
      <div 
        class="dynamic-field form-select"
        [formGroup]="group">
        <label>{{ config.label }}</label>
        <select [formControlName]="config.name">
          <option value="">{{ config.placeholder }}</option>
          <option *ngFor="let option of config.options">
            {{ option }}
          </option>
        </select>
      </div>
    `
  })
  export class FormSelectComponent implements Field {
    config!: FieldConfig;
    group!: FormGroup;
  }