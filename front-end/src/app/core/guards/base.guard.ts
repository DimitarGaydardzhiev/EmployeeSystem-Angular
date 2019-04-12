import { Injectable, OnDestroy } from '@angular/core'
import { Store } from "@ngrx/store"
import { State, getAuthState } from '../store/reducers'

@Injectable()
export class BaseGuard implements OnDestroy {
  protected isAlive = true
  userRole: string
  isLogged: boolean

  ngOnDestroy(): void {
    this.isAlive = false
  }

  constructor(public store: Store<State>) {
    store.select(getAuthState)
      .takeWhile(data => this.isAlive)
      .subscribe(auth => {
        if (auth.user) {
          this.isLogged = auth.loggedIn
          this.userRole = auth.user.role
        }
      })
  }

  get isAdmin(): boolean {
    return this.userRole === 'administrator'
  }

  get isLoggedIn(): boolean {
    return this.isLogged
  }
}