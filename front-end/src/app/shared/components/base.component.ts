import { OnDestroy, Component } from "@angular/core";

@Component({
    template: ''
})
export class BaseComponent implements OnDestroy {
    protected isAlive = true

    ngOnDestroy(): void {
        this.isAlive = false
    }
}