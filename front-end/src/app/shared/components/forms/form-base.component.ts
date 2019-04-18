import { Component, Input, forwardRef, Injector } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'form-base',
  template: ''
})

export class FormBaseComponent implements ControlValueAccessor {
  @Input() placeHolder: string = ''
  @Input() inputLabel: string
  @Input() required: boolean
  @Input() id: string
  // private onChangeCallback: (value: any) => {};
  control: NgControl
  // private onTouchedCallback: (value: any) => {};
  private innerValue: any = '';

  constructor(public injector: Injector) {
  }

  // get accessor
  get value(): any {
    return this.innerValue;
  };

  // set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any): void {
    // this.onTouchedCallback = fn;
    return null
  }
  setDisabledState?(isDisabled: boolean): void {
    return null
  }

  onChangeCallback(value) {
    return null
  }
}

export function MakeValueAccessorProviders(type: any) {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => type),
    multi: true
  };
}
