import { ElementComponent } from './../components/element.component';
import { FieldConfig } from './../models/field-config';
import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from "@angular/core";
import { Field } from "../models/field";
import { FormGroup } from '@angular/forms';

  
  @Directive({
    selector: '[dynamicField]'
  })
  export class DynamicFieldDirective implements Field, OnChanges, OnInit {
    @Input()
    config!: FieldConfig;
  
    @Input()
    group!: FormGroup;
  
    component!: ComponentRef<Field>;
  
    constructor(
      private resolver: ComponentFactoryResolver,
      private container: ViewContainerRef
    ) {}
  
    ngOnChanges() {
      if (this.component) {
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
      }
    }
  
    ngOnInit() {
      const component = this.resolver.resolveComponentFactory<Field>(ElementComponent);
      this.component = this.container.createComponent(component);
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }