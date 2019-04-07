import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AuthService, ApiService } from "./services";
@NgModule({
    imports: [
        CommonModule, HttpClientModule
    ],
    declarations: [
    ],
    providers: [
        HttpClient,
        AuthService,
        ApiService
    ]
})

export class CoreModule {
    constructor() { }
}