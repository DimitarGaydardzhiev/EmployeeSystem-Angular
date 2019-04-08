import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getFormerEmployees, getCurrentEmployees } from '../../core/store/reducers';
import { BaseComponent } from '../../shared/components/base.component';
import { ActivatedRoute } from '@angular/router';
import { GetAllEmployeesAction } from '../../core/store/actions/employee.actions';
import { Employee } from '../../core/models/employee/employee.model';

@Component({
  templateUrl: './employee-mgmt.component.html',
})

export class EmployeeManagementComponent extends BaseComponent implements OnInit {
  employees: Employee[] = []
  areFormer: boolean

  constructor(public store: Store<State>, private route: ActivatedRoute) {
    super(store)

    this.route.url.takeWhile(data => this.isAlive)
      .subscribe(paths => {
        this.areFormer = paths[1].path === 'former'
      })

    if (this.areFormer) {
      this.store.select(getFormerEmployees).takeWhile(data => this.isAlive).subscribe(state => {
        this.employees = state
      })
    } else {
      this.store.select(getCurrentEmployees).takeWhile(data => this.isAlive).subscribe(state => {
        this.employees = state
      })
    }
  }

  ngOnInit() {
    if (this.areFormer) {
      this.store.dispatch(new GetAllEmployeesAction(this.areFormer))
    } else {
      this.store.dispatch(new GetAllEmployeesAction(this.areFormer))
    }
  }
}
