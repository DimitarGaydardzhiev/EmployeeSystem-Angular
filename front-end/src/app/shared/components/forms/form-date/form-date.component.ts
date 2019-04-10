import { Component, Input } from '@angular/core'
import { FormBaseComponent } from '../form-base.component';

@Component({
  selector: 'form-date',
  templateUrl: 'form-date.component.html'
})
export class FormDateComponent extends FormBaseComponent {
  date: any
}
