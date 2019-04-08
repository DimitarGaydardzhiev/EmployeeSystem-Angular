import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/components/base.component';
import { Store } from '@ngrx/store';
import { State } from '../../core/store/reducers';
import { Router } from '@angular/router';

@Component({
    templateUrl: './home.component.html',
})

export class HomeComponent extends BaseComponent {
    constructor(public store: Store<State>, public router: Router) {
        super(store);
    }

    navigate(route: string): void {
        this.router.navigateByUrl(route)
    }
}
