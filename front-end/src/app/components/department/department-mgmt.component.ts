import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getDepartments } from '../../core/store/reducers';
import { GetAllDepartmentsAction } from '../../core/store/actions/department.actions';
import { Department } from '../../core/models/department/department.model';
import { BaseComponent } from '../../shared/components/base.component';

@Component({
  templateUrl: './department-mgmt.component.html',
})

export class DepartmentManagementComponent extends BaseComponent implements OnInit {
  departments: Department[] = []

  constructor(public store: Store<State>) {
    super(store)
    this.store.select(getDepartments).takeWhile(data => this.isAlive).subscribe(state => {
      this.departments = state
    })
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAllDepartmentsAction())
  }
}
