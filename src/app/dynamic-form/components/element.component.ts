import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Field } from "../models/field";
import { FieldConfig } from "../models/field-config";

@Component({
  selector: "form-input",
  styleUrls: ["element.component.scss"],
  templateUrl: "element.component.html",
})
export class ElementComponent implements Field {
  config!: FieldConfig;
  group!: FormGroup;
}
