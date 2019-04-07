import { Component } from '@angular/core';
import { State, getLoaderStatus } from '../../core/store/reducers';
import { Store } from '@ngrx/store';
import { BaseComponent } from '../../shared/components/base.component';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent {
  objLoaderStatus: boolean

  constructor(private store: Store<State>) {
    super()

    this.store.select(getLoaderStatus).takeWhile(data => this.isAlive).subscribe(state => {
      this.objLoaderStatus = state
    })
  }
}
