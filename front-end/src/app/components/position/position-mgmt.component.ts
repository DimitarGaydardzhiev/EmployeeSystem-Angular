import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getPositions } from '../../core/store/reducers';
import { BaseComponent } from '../../shared/components/base.component';
import { GetAllPositionsAction } from '../../core/store/actions/position.actions';
import { Position } from '../../core/models/position/position.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: './position-mgmt.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})

export class PositionManagementComponent extends BaseComponent implements OnInit {
  positions: Position[] = []
  columns: {} = { name: 'Name', employeesCount: 'Employees Count'}

  constructor(public store: Store<State>, private router: Router) {
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

  addPosition(): void {
    this.router.navigateByUrl('positions/add')
  }
}
