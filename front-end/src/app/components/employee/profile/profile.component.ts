import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseComponent } from '../../../shared/components/base.component';
import { GetProfileInfoAction } from '../../../core/store/actions/employee.actions';
import { State, getProfileInfo } from '../../../core/store/reducers';
import { ProfileInfo } from '../../../core/models/employee/profile-info';

@Component({
    templateUrl: './profile.component.html',
})

export class ProfileComponent extends BaseComponent implements OnInit {
    profileInfo: ProfileInfo = new ProfileInfo()

    constructor(public store: Store<State>) {
        super(store)

        this.store.select(getProfileInfo).takeWhile(data => this.isAlive).subscribe(state => {
            this.profileInfo = state
        })
    }

    ngOnInit(): void {
        this.store.dispatch(new GetProfileInfoAction())
    }
}
