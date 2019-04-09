import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/components/base.component';
import { Employee } from '../../core/models/employee/employee.model';

@Component({
  templateUrl: './employee.component.html',
})

export class EmployeeComponent extends BaseComponent {
  entity: Employee = new Employee()

  onSubmit(data) {
    console.log(data)
    console.log(this.entity)
  }
}
