import { Component, Input, AfterViewInit, OnInit, OnChanges, SimpleChange } from '@angular/core'
import { BehaviorSubject } from 'rxjs-compat';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html'
})

export class DataTableComponent {
  @Input() columns: string[]
  @Input() isAdmin: boolean
  // initialize a private variable _data, it's a BehaviorSubject
  private _data = new BehaviorSubject<any[]>([]);
  filteredData: any[]
  objectKeys = Object.keys

  // change data to use getter and setter
  @Input()
  set data(value) {
    // set the latest value for _data BehaviorSubject
    this._data.next(value);
  };

  get data() {
    // get the latest value from _data BehaviorSubject
    return this._data.getValue();
  }

  isVisible(key: string): boolean {
    return Object.keys(this.columns).includes(key)
  }
}
