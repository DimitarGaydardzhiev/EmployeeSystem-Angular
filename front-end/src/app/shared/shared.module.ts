import { NgModule } from "@angular/core";
import { sharedComponents } from './components'
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterModule
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