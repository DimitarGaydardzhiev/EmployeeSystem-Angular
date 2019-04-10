import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getApprovedRequests } from '../../../core/store/reducers';
import { GetMyRequestsAction, GetApprovedRequestsAction } from '../../../core/store/actions/request.actions';
import { Request } from '../../../core/models/request/request.model';
import { BaseComponent } from '../../../shared/components/base.component';

@Component({
  templateUrl: './approved-request-mgmt.component.html',
})

export class ApprovedRequestManagementComponent extends BaseComponent implements OnInit {
  requests: Request[] = []
  columns: {} = {
    requestType: 'Request Type',
    from: 'From',
    to: 'To',
    isApproved: 'isApproved',
    description: 'description'
  }

  constructor(public store: Store<State>) {
    super(store)
    this.store.select(getApprovedRequests).takeWhile(data => this.isAlive).subscribe(state => {
      if (state && state.length) {
        this.requests = state
      }
    })
  }

  ngOnInit(): void {
    this.store.dispatch(new GetApprovedRequestsAction())
   }
}
