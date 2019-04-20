import { Component, Input } from '@angular/core'
import { Request } from '../../../core/models/request/request.model';
import { Store } from '@ngrx/store';
import { State } from '../../../core/store/reducers';
import { ApproveAction, UnapproveAction } from '../../../core/store/actions/request.actions';

@Component({
  selector: 'request-table',
  templateUrl: './request-table.component.html'
})

export class RequestTableComponent {
  @Input() isAdmin: boolean
  @Input() btnLabel: string = ''
  @Input() btnClass: string = ''
  @Input() requests: []

  constructor(private store: Store<State>) { }

  manageRequest(item: Request): void {
    if (item.isApproved) {
      this.store.dispatch(new UnapproveAction(item.id))
    } else {
      this.store.dispatch(new ApproveAction(item.id))
    }
  }
}
