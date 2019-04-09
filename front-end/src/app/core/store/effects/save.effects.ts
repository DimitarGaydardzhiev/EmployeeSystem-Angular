import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { ActionTypes, SaveActionSuccess, SaveActionFail, SaveAction } from "../actions/save.actions";
import { Observable } from "rxjs/Observable";
import { SaveService } from "../../services/common/save.service";

@Injectable()
export class SaveEffects {
  constructor(private service: SaveService, private actions: Actions) { }

  @Effect() save = this.actions
  .pipe(ofType<SaveAction>(ActionTypes.SAVE))
    .switchMap(action => this.service.save(action.payload)
      .map(res => new SaveActionSuccess(res))
      .catch((err) => {
        return Observable.of(new SaveActionFail(err));
      })
    )
}