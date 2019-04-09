import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getMyRequests } from '../../core/store/reducers';
import { BaseComponent } from '../../shared/components/base.component';
import { GetMyRequestsAction } from '../../core/store/actions/request.actions';
import { Request } from '../../core/models/request/request.model';

@Component({
  templateUrl: './my-request-mgmt.component.html',
})

export class MyRequestManagementComponent extends BaseComponent implements OnInit {
  requests: Request[] = []

  constructor(public store: Store<State>) {
    super(store)
    this.store.select(getMyRequests).takeWhile(data => this.isAlive).subscribe(state => {
      if (state && state.length) {
        this.requests = state
      }
    })
  }

  ngOnInit(): void {
    this.store.dispatch(new GetMyRequestsAction(this.userId))
  }
}
