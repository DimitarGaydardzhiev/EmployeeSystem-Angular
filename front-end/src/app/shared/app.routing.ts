import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { DepartmentManagementComponent } from '../components/department/department-mgmt.component';
import { PositionManagementComponent } from '../components/position/position-mgmt.component';
import { EmployeeManagementComponent } from '../components/employee/employee-mgmt.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'departments', component: DepartmentManagementComponent },
    { path: 'positions', component: PositionManagementComponent },
    { path: 'employees/current', component: EmployeeManagementComponent },
    { path: 'employees/former', component: EmployeeManagementComponent },
    { path: '**', redirectTo: '/home' }
]

export const routing = RouterModule.forRoot(appRoutes)