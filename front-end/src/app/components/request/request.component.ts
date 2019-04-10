import { Component, OnInit } from '@angular/core';
import { Request } from '../../core/models/request/request.model';
import { GetRequestTypesAction } from '../../core/store/actions/request.actions';
import { Store } from '@ngrx/store';
import { State, getRequestTypes } from '../../core/store/reducers/';
import { BaseModel } from '../../core/models';
import { BaseComponent } from '../../shared/components/base.component';
import { SaveAction } from '../../core/store/actions/save.actions';

@Component({
  templateUrl: './request.component.html',
})

export class RequestComponent extends BaseComponent implements OnInit {
  entity: Request = new Request()
  requestTypes: BaseModel[] = []

  constructor(public store: Store<State>, ) {
    super(store)

    this.entity.objectType = "Request"

    this.store.select(getRequestTypes).takeWhile(data => this.isAlive).subscribe(state => {
      this.requestTypes = state
    })
  }

  onSubmit() {
    this.entity.from =
      new Date(this.entity.from.year, this.entity.from.month, this.entity.from.day);
    this.entity.to =
      new Date(this.entity.to.year, this.entity.to.month, this.entity.to.day);
    debugger
    this.store.dispatch(new SaveAction(this.entity))
  }

  ngOnInit(): void {
    this.store.dispatch(new GetRequestTypesAction())
  }
}
