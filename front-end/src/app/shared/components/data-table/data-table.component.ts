import { Component, Input } from '@angular/core'
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
  @Input() data: []
  objectKeys = Object.keys
  constructor(private store: Store<State>, private router: Router) { }

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
