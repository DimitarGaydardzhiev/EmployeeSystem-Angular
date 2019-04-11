import { Component, Input } from '@angular/core'
import { FormBaseComponent, MakeValueAccessorProviders } from '../form-base.component';

@Component({
  selector: 'form-input',
  templateUrl: 'form-input.component.html',
  providers: [
      MakeValueAccessorProviders(FormInputComponent)
  ]
})
export class FormInputComponent extends FormBaseComponent {
  @Input() inputType: string
  @Input() maxLength?: number
  @Input() minLength?: number
}
