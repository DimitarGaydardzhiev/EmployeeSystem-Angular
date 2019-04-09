import { NgModule } from "@angular/core";
import { sharedComponents } from './components'
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        ...sharedComponents
    ],
    exports: [
        ...sharedComponents,
    ],
    providers: []
})

export class SharedModule {
    constructor() { }
}