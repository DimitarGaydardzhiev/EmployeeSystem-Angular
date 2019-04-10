import { Component } from '@angular/core';
import { Department } from '../../core/models/department/department.model';
import { Store } from '@ngrx/store';
import { State } from '../../core/store/reducers/';
import { SaveAction } from '../../core/store/actions/common.actions';

@Component({
  templateUrl: './department.component.html',
})

export class DepartmentComponent  {
  entity: Department = new Department()

  constructor(public store: Store<State>) {
    this.entity.objectType = "Department"
  }

  onSubmit() {
    this.store.dispatch(new SaveAction(this.entity))
  }
}
