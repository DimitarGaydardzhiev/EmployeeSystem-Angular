import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getPositionById } from '../../core/store/reducers/';
import { SaveAction } from '../../core/store/actions/common.actions';
import { Position } from '../../core/models/position/position.model';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../../shared/components/base.component';
import { CommonService } from '../../core';
import { GetAllPositionsAction } from '../../core/store/actions/position.actions';

@Component({
  templateUrl: './position.component.html',
})

export class PositionComponent extends BaseComponent implements OnInit {
  public entity: Position = new Position

  constructor(public store: Store<State>, private route: ActivatedRoute, private commonService: CommonService) {
    super(store)
    this.entity.objectType = "Position"

    this.route.params.subscribe(params => {
      if (params['id']) {
        const id = Number(params['id'])
        this.store.select(getPositionById, { id }).takeWhile(data => this.isAlive).subscribe(state => {
          if (state) {
            this.entity = Object.assign({}, state)
            this.entity.objectType = "Position"
          }
        })
      }
    })
  }

  onSubmit() {
    this.store.dispatch(new SaveAction(this.entity))
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAllPositionsAction())
  }
}
