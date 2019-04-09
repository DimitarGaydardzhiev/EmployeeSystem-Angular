import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { DepartmentManagementComponent } from '../components/department/department-mgmt.component';
import { PositionManagementComponent } from '../components/position/position-mgmt.component';
import { EmployeeManagementComponent } from '../components/employee/employee-mgmt.component';
import { MyRequestManagementComponent } from '../components/request/my-request-mgmt.component';
import { EmployeeComponent } from '../components/employee/employee.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'departments', component: DepartmentManagementComponent },
    { path: 'positions', component: PositionManagementComponent },
    { path: 'employees/current', component: EmployeeManagementComponent },
    { path: 'employees/former', component: EmployeeManagementComponent },
    { path: 'requests/my', component: MyRequestManagementComponent },
    { path: 'employees/add', component: EmployeeComponent },
    { path: '**', redirectTo: '/home' }
]

export const routing = RouterModule.forRoot(appRoutes)