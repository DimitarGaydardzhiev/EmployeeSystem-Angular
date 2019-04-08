import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AuthService, ApiService, DepartmentService, PositionService, EmployeeService } from "./services";
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
        EmployeeService
    ]
})

export class CoreModule {
    constructor() { }
}