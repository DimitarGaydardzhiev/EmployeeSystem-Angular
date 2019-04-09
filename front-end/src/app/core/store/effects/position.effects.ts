import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { ActionTypes, GetAllPositionsActionSuccess, GetAllPositionsActionFail } from "../actions/position.actions";
import { Observable } from "rxjs/Observable";
import { PositionService } from "../../services";

@Injectable()
export class PositionEffects {
  constructor(private service: PositionService, private actions: Actions) { }

  @Effect() getAllPositions = this.actions
    .pipe(ofType(ActionTypes.GET_ALL_POSITIONS))
    .switchMap(() => this.service.all()
      .map(res => new GetAllPositionsActionSuccess(res))
      .catch((err) => {
        return Observable.of(new GetAllPositionsActionFail(err));
      })
    )
}