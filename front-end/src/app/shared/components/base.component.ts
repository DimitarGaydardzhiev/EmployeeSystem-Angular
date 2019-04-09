import { OnDestroy, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "../../core/store/reducers";
import { getAuthState } from "../../core/store/reducers";

@Component({
    template: ''
})

export class BaseComponent implements OnDestroy {
    protected isAlive = true
    userRole: string
    isLogged: boolean
    email: string
    userId: number

    ngOnDestroy(): void {
        this.isAlive = false
    }

    constructor(public store: Store<State>) {
        store.select(getAuthState)
            .takeWhile(data => this.isAlive)
            .subscribe(auth => {
                if (auth.user) {
                    this.userRole = auth.user.role
                    this.isLogged = auth.loggedIn
                    this.email = auth.user.email
                    this.userId = Number(auth.user.id)
                }
            })
    }

    get isAdmin(): boolean {
        return this.userRole === 'administrator'
    }

    get isLoggedIn(): boolean {
        return this.isLogged
    }

    get userEmail(): string {
        return this.email
    }
}