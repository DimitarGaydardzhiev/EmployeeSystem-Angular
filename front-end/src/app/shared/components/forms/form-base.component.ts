import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'form-base',
  template: ''
})

export class FormBaseComponent implements ControlValueAccessor {
  @Input() placeHolder: string = ''
  @Input() inputLabel: string
  @Input() required: boolean
  @Input() id: string
  private innerValue: any = '';

  private onTouchedCallback: () => void;
  private onChangeCallback: (fn: any) => void;

  get value(): any {
    return this.innerValue;
  };

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

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
  setDisabledState?(): void {
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
