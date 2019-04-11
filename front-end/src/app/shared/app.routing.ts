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
import { AuthGuard, AdminGuard } from '../core/guards';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'departments', component: DepartmentManagementComponent },
    { path: 'positions', component: PositionManagementComponent },
    { path: 'positions/add', component: PositionComponent, canActivate: [AdminGuard] },
    { path: 'positions/:id', component: PositionComponent, canActivate: [AdminGuard] },
    { path: 'employees/current', component: EmployeeManagementComponent },
    { path: 'employees/former', component: EmployeeManagementComponent },
    { path: 'requests/my', component: MyRequestManagementComponent, canActivate: [AuthGuard] },
    { path: 'requests/approved', component: ApprovedRequestManagementComponent, canActivate: [AdminGuard] },
    { path: 'requests/pending', component: PendingRequestManagementComponent, canActivate: [AdminGuard] },
    { path: 'requests/add', component: RequestComponent, canActivate: [AuthGuard] },
    { path: 'employees/add', component: EmployeeComponent, canActivate: [AdminGuard] },
    { path: 'departments/add', component: DepartmentComponent, canActivate: [AdminGuard] },
    { path: 'departments/:id', component: DepartmentComponent, canActivate: [AdminGuard] },
    { path: '**', redirectTo: '/home' }
]

export const routing = RouterModule.forRoot(appRoutes)