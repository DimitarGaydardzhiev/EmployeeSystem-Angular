import { NgModule } from "@angular/core";
import { sharedComponents } from './components'
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        NgbModule.forRoot()
    ],
    declarations: [
        ...sharedComponents
    ],
    exports: [
        NgbModule,
        FormsModule,
        ...sharedComponents
    ],
    providers: []
})

export class SharedModule {
    constructor() { }
}