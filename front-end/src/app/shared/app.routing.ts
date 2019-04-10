import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { DepartmentManagementComponent } from '../components/department/department-mgmt.component';
import { PositionManagementComponent } from '../components/position/position-mgmt.component';
import { EmployeeManagementComponent } from '../components/employee/employee-mgmt.component';
import { MyRequestManagementComponent } from '../components/request/my/my-request-mgmt.component';
import { EmployeeComponent } from '../components/employee/employee.component';
import { ApprovedRequestManagementComponent } from '../components/request/approved/approved-request-mgmt.component';
import { PendingRequestManagementComponent } from '../components/request/pending/pending-request-mgmt.component';
import { RequestComponent } from '../components/request/request.component';
import { DepartmentComponent } from '../components/department/department.component';
import { PositionComponent } from '../components/position/position.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'departments', component: DepartmentManagementComponent },
    { path: 'positions', component: PositionManagementComponent },
    { path: 'positions/add', component: PositionComponent },
    { path: 'positions/:id', component: PositionComponent },
    { path: 'employees/current', component: EmployeeManagementComponent },
    { path: 'employees/former', component: EmployeeManagementComponent },
    { path: 'requests/my', component: MyRequestManagementComponent },
    { path: 'requests/approved', component: ApprovedRequestManagementComponent },
    { path: 'requests/pending', component: PendingRequestManagementComponent },
    { path: 'requests/add', component: RequestComponent },
    { path: 'employees/add', component: EmployeeComponent },
    { path: 'departments/add', component: DepartmentComponent },
    { path: '**', redirectTo: '/home' }
]

export const routing = RouterModule.forRoot(appRoutes)