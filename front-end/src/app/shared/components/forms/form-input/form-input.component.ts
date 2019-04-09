import { Component, Input, Output, EventEmitter } from '@angular/core'
import { FormBaseComponent } from '../form-base.component';

@Component({
  selector: 'form-input',
  templateUrl: 'form-input.component.html'
})
export class FormInputComponent extends FormBaseComponent {
  @Input() inputType: string
  @Input() maxLength?: number
  @Input() minLength?: number
}
