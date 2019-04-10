import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
    AuthService, ApiService, DepartmentService, PositionService,
    EmployeeService, RequestService, SaveService, ToastrService
} from "./services";
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
        SaveService,
        ToastrService
    ]
})

export class CoreModule {
    constructor() { }
}