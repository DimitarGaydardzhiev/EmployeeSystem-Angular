import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../core/store/reducers/';
import { SaveAction } from '../../core/store/actions/common.actions';
import { Position } from '../../core/models/position/position.model';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../../shared/components/base.component';
import { CommonService } from '../../core';

@Component({
  templateUrl: './position.component.html',
})

export class PositionComponent extends BaseComponent {
  entity: Position = new Position()
  @Input() editItem: Position;

  constructor(public store: Store<State>, private route: ActivatedRoute, private commonService: CommonService) {
    super(store)
    this.entity.objectType = "Position"

    this.route.params.subscribe(params => {
      debugger
      if (params['id']) {
        this.commonService.getById(this.entity.objectType, params['id'])
          .subscribe(data => {
            //this.entity = Object.assign({}, data)
          })
      }
    })
  }

  onSubmit() {
    this.store.dispatch(new SaveAction(this.entity))
  }
}
