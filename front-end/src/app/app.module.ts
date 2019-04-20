import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { SharedModule } from './shared';
import { routing } from './shared/app.routing';
import { HomeComponent } from './components/home/home.component';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './core/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects, DepartmentEffects, PositionEffects, EmployeeEffects, RoleEffects, SaveEffects } from './core/store/effects';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DepartmentManagementComponent } from './components/department/department-mgmt.component';
import { PositionManagementComponent } from './components/position/position-mgmt.component';
import { EmployeeManagementComponent } from './components/employee/employee-mgmt.component';
import { RequestEffects } from './core/store/effects/request.effects';
import { MyRequestManagementComponent } from './components/request/my/my-request-mgmt.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApprovedRequestManagementComponent } from './components/request/approved/approved-request-mgmt.component';
import { PendingRequestManagementComponent } from './components/request/pending/pending-request-mgmt.component';
import { RequestComponent } from './components/request/request.component';
import { ToastrModule } from 'ngx-toastr';
import { DepartmentComponent } from './components/department/department.component';
import { PositionComponent } from './components/position/position.component';
import { ProfileComponent } from './components/employee/profile/profile.component';


@NgModule({
  // components, directives and pipes
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DepartmentManagementComponent,
    PositionManagementComponent,
    EmployeeManagementComponent,
    MyRequestManagementComponent,
    EmployeeComponent,
    ApprovedRequestManagementComponent,
    PendingRequestManagementComponent,
    RequestComponent,
    DepartmentComponent,
    PositionComponent,
    ProfileComponent
  ],
  // other modules
  imports: [
    BrowserModule,
    SharedModule,
    routing,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastrModule.forRoot(),

    StoreModule.forRoot(reducers, { metaReducers }),

    EffectsModule.forRoot([
      AuthEffects,
      DepartmentEffects,
      PositionEffects,
      EmployeeEffects,
      RequestEffects,
      RoleEffects,
      SaveEffects
    ])
  ],
  // Register service providers and inject them into components
  providers: [],
  // The root component – used to launch the application
  bootstrap: [AppComponent]
})
export class AppModule { }
