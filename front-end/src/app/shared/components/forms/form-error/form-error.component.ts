import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'form-error',
  templateUrl: 'form-error.component.html'
})
export class FormErrorComponent implements OnInit {
  @Input() inputLabel = ''
  @Input() model: any
  @Input() maxlength?: number
  @Input() minlength?: number

  ngOnInit(): void {
    console.log(this.model.errors)
  }
}
