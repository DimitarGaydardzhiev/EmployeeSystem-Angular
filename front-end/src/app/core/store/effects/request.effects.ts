import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { ActionTypes, GetMyRequestsActionSuccess, GetMyRequestsActionFail } from "../actions/request.actions";
import { Observable } from "rxjs/Observable";
import { RequestService } from "../../services";

@Injectable()
export class RequestEffects {
  constructor(private service: RequestService, private actions: Actions) { }

  @Effect() getMyRequests = this.actions
    .pipe(ofType(ActionTypes.GET_MY_REQUESTS))
    .switchMap(() => this.service.myRequests()
      .map(res => new GetMyRequestsActionSuccess(res))
      .catch((err) => {
        return Observable.of(new GetMyRequestsActionFail(err));
      })
    )
}