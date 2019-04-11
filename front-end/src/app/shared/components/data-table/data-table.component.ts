import { Component, Input, AfterViewInit, OnInit, OnChanges, SimpleChange } from '@angular/core'
import { BehaviorSubject } from 'rxjs-compat';
import { Router } from '@angular/router';
import { State } from '../../../core/store/reducers';
import { Store } from '@ngrx/store';
import { DeleteAction } from '../../../core/store/actions/common.actions';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html'
})

export class DataTableComponent {
  @Input() columns: string[]
  @Input() isAdmin: boolean
  @Input() object: string
  // initialize a private variable _data, it's a BehaviorSubject
  private _data = new BehaviorSubject<any[]>([]);
  filteredData: any[]
  objectKeys = Object.keys
  constructor(private store: Store<State>, private router: Router) { }

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

  edit(id: number): void {
    const editUrl = `${this.router.url}/${id}`
    this.router.navigateByUrl(editUrl)
  }

  delete(id: number): void {
    this.store.dispatch(new DeleteAction({ object: this.object, id: id }))
  }
}
