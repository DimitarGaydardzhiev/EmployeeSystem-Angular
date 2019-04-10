import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { ActionTypes, SaveActionSuccess, SaveActionFail, SaveAction } from "../actions/save.actions";
import { Observable } from "rxjs/Observable";
import { SaveService } from "../../services/common/save.service";
import { ToastrService } from "../../services";
import { Router } from "@angular/router";
import { routerNgProbeToken } from "@angular/router/src/router_module";

@Injectable()
export class SaveEffects {
  constructor(private service: SaveService, private actions: Actions, private toastr: ToastrService, private router: Router) { }

  @Effect() save = this.actions
    .pipe(ofType<SaveAction>(ActionTypes.SAVE))
    .switchMap(action => this.service.save(action.payload)
      .map(res => {
        this.toastr.success('Save Successful!')
        this.router.navigateByUrl(res)
        return new SaveActionSuccess(res)
      })
      .catch((err) => {
        this.toastr.error(err.error)
        return Observable.of(new SaveActionFail(err));
      })
    )
}