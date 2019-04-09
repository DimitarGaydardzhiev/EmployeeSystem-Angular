import {
  Component, EventEmitter, Output, Input,
  ContentChildren, ViewChild, QueryList, AfterViewInit
} from '@angular/core'

import { NgForm, NgModel } from '@angular/forms'

@Component({
  selector: 'data-form',
  templateUrl: 'data-form.component.html'
})
export class DataFormComponent implements AfterViewInit {
  @Output() submitForm = new EventEmitter<any>()

  @ContentChildren(NgModel) public models: QueryList<NgModel>;
  @ViewChild(NgForm) public form: NgForm;

  public ngAfterViewInit(): void {
    const ngContentModels = this.models.toArray();
    ngContentModels.forEach((model) => {
      this.form.addControl(model);
    });
  }

  onSubmit() {
    this.submitForm.emit(this.form)
  }
}
