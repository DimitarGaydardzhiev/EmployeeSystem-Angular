import { Component, Input, AfterViewInit, OnInit, OnChanges, SimpleChange } from '@angular/core'
import { BehaviorSubject } from 'rxjs-compat';

@Component({
  selector: 'request-table',
  templateUrl: './request-table.component.html'
})

export class RequestTableComponent {
  @Input() isAdmin: boolean
  // initialize a private variable _data, it's a BehaviorSubject
  private _requests = new BehaviorSubject<any[]>([]);

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
}
