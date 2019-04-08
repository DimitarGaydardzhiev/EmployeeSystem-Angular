import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getPositions } from '../../core/store/reducers';
import { BaseComponent } from '../../shared/components/base.component';
import { GetAllPositionsAction } from '../../core/store/actions/position.actions';
import { Position } from '../../core/models/position/position.model';

@Component({
  templateUrl: './position-mgmt.component.html',
})

export class PositionManagementComponent extends BaseComponent implements OnInit {
  positions: Position[] = []

  constructor(public store: Store<State>) {
    super(store)
    this.store.select(getPositions).takeWhile(data => this.isAlive).subscribe(state => {
      if (state && state.length) {
        this.positions = state
      }
    })
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAllPositionsAction())
  }
}