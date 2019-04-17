import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
    AuthService, ApiService, DepartmentService, PositionService,
    EmployeeService, RequestService, CommonService, ToastrService, TokenInterceptor
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
        AdminGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ]
})

export class CoreModule {
    constructor() { }
}