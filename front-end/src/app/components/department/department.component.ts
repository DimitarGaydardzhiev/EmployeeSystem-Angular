import { Component } from '@angular/core';
import { Department } from '../../core/models/department/department.model';
import { Store } from '@ngrx/store';
import { State, getDepartmentById } from '../../core/store/reducers/';
import { SaveAction } from '../../core/store/actions/common.actions';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../../shared/components/base.component';

@Component({
  templateUrl: './department.component.html',
})

export class DepartmentComponent extends BaseComponent {
  entity: Department = new Department()

  constructor(public store: Store<State>, private route: ActivatedRoute) {
    super(store)
    this.entity.objectType = "Department"

    this.route.params.subscribe(params => {
      if (params['id']) {
        const id = Number(params['id'])
        this.store.select(getDepartmentById, { id }).takeWhile(data => this.isAlive).subscribe(state => {
          if (state) {
            this.entity = Object.assign({}, state)
            this.entity.objectType = "Department"
          }
        })
      }
    })
  }

  onSubmit() {
    this.store.dispatch(new SaveAction(this.entity))
  }
}
