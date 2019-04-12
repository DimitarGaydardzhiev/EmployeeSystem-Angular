import { Component, Input } from '@angular/core'
import { FormBaseComponent, MakeValueAccessorProviders } from '../form-base.component';

@Component({
  selector: 'form-select',
  templateUrl: 'form-select.component.html',
  providers: [
      MakeValueAccessorProviders(FormSelectComponent)
  ]
})
export class FormSelectComponent extends FormBaseComponent {
  @Input() source: any[] = []
}
