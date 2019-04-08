import { Component } from '@angular/core';
import { State, getLoaderStatus } from '../../core/store/reducers';
import { Store } from '@ngrx/store';
import { BaseComponent } from '../../shared/components/base.component';
import 'rxjs-compat';
import { LogoutAction } from '../../core/store/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent {
  objLoaderStatus: boolean

  constructor(public store: Store<State>) {
    super(store)

    this.store.select(getLoaderStatus).takeWhile(data => this.isAlive).subscribe(state => {
      this.objLoaderStatus = state
    })
  }

  logOut() {
    this.store.dispatch(new LogoutAction(null))
  }
}
