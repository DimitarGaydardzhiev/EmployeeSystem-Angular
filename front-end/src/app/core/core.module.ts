import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
    AuthService, ApiService, DepartmentService, PositionService,
    EmployeeService, RequestService, CommonService, ToastrService
} from "./services";
import { AuthGuard, AdminGuard, BaseGuard } from "./guards";
@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    declarations: [
    ],
    providers: [
        HttpClient,
        AuthService,
        ApiService,
        DepartmentService,
        PositionService,
        EmployeeService,
        RequestService,
        CommonService,
        ToastrService,
        BaseGuard,
        AuthGuard,
        AdminGuard
    ]
})

export class CoreModule {
    constructor() { }
}