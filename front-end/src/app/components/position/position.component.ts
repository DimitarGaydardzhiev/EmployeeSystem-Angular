import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../core/store/reducers/';
import { SaveAction } from '../../core/store/actions/save.actions';
import { Position } from '../../core/models/position/position.model';

@Component({
  templateUrl: './position.component.html',
})

export class PositionComponent  {
  entity: Position = new Position()

  constructor(public store: Store<State>) {
    this.entity.objectType = "Position"
  }

  onSubmit() {
    this.store.dispatch(new SaveAction(this.entity))
  }
}
