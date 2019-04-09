import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-base',
  template: ''
})

export class FormBaseComponent {
  @Input() placeHolder: string = ''
  @Input() inputLabel: string
  @Input() id: string
}
