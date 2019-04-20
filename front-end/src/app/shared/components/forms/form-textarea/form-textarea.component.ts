import { Component, Input } from '@angular/core'
import { FormBaseComponent, MakeValueAccessorProviders } from '../form-base.component';

@Component({
  selector: 'form-textarea',
  templateUrl: 'form-textarea.component.html',
  providers: [
    MakeValueAccessorProviders(FormTextareaComponent)
  ]
})
export class FormTextareaComponent extends FormBaseComponent {
  @Input() rows?: number
  @Input() cols?: number
  @Input() maxlength?: number
  @Input() minlength?: number
}
