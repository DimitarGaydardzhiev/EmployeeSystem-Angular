import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/components/base.component';
import { Employee } from '../../core/models/employee/employee.model';
import { BaseModel } from '../../core/models';
import { Store } from '@ngrx/store';
import { State, getAllRoles, getPositions, getDepartments } from '../../core/store/reducers';
import { GetAllRolesAction } from '../../core/store/actions/role.actions';
import { Position } from '../../core/models/position/position.model';
import { GetAllPositionsAction } from '../../core/store/actions/position.actions';
import { Department } from '../../core/models/department/department.model';
import { GetAllDepartmentsAction } from '../../core/store/actions/department.actions';
import { SaveAction } from '../../core/store/actions/common.actions';

@Component({
  templateUrl: './employee.component.html',
})

export class EmployeeComponent extends BaseComponent implements OnInit {
  entity: Employee = new Employee()
  roles: BaseModel[] = []
  positions: Position[] = []
  departments: Department[] = []

  constructor(public store: Store<State>, ) {
    super(store)

    this.entity.objectType = "Account"

    this.store.select(getAllRoles).takeWhile(data => this.isAlive).subscribe(state => {
      this.roles = state
    })

    this.store.select(getPositions).takeWhile(data => this.isAlive).subscribe(state => {
      this.positions = state
    })

    this.store.select(getDepartments).takeWhile(data => this.isAlive).subscribe(state => {
      this.departments = state
    })
  }

  onSubmit() {
    this.store.dispatch(new SaveAction(this.entity))
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAllRolesAction())
    this.store.dispatch(new GetAllPositionsAction())
    this.store.dispatch(new GetAllDepartmentsAction())
  }
}
