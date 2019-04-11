import { Component, Input, AfterViewInit, OnInit, OnChanges, SimpleChange } from '@angular/core'
import { BehaviorSubject } from 'rxjs-compat';
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
  // initialize a private variable _data, it's a BehaviorSubject
  private _requests = new BehaviorSubject<any[]>([]);

  constructor(private store: Store<State>) { }

  // change data to use getter and setter
  @Input()
  set requests(value) {
    // set the latest value for _data BehaviorSubject
    this._requests.next(value);
  };

  get requests() {
    // get the latest value from _data BehaviorSubject
    return this._requests.getValue();
  }

  manageRequest(item: Request): void {
    if (item.isApproved) {
      this.store.dispatch(new UnapproveAction(item.id))
    } else {
      this.store.dispatch(new ApproveAction(item.id))
    }
  }
}
