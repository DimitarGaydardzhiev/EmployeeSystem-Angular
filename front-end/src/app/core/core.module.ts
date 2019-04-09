import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AuthService, ApiService, DepartmentService, PositionService, EmployeeService, RequestService, SaveService } from "./services";
@NgModule({
    imports: [
        CommonModule, HttpClientModule
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
        SaveService
    ]
})

export class CoreModule {
    constructor() { }
}