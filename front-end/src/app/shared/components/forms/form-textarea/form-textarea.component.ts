import { Component, Input } from '@angular/core'
import { FormBaseComponent } from '../form-base.component';

@Component({
  selector: 'form-textarea',
  templateUrl: 'form-textarea.component.html'
})
export class FormTextareaComponent extends FormBaseComponent {
  @Input() rows?: number
  @Input() cols?: number
}
