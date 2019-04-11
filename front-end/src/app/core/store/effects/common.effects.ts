import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { ActionTypes, SaveActionSuccess, SaveActionFail, SaveAction, DeleteAction } from "../actions/common.actions";
import { Observable } from "rxjs/Observable";
import { CommonService } from "../../services/common/common.service";
import { ToastrService } from "../../services";
import { Router } from "@angular/router";

@Injectable()
export class SaveEffects {
  constructor(private service: CommonService, private actions: Actions, private toastr: ToastrService, private router: Router) { }

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

  @Effect() delete = this.actions
    .pipe(ofType<DeleteAction>(ActionTypes.DELETE))
    .switchMap(action => this.service.delete(action.payload)
      .map(res => {
        this.toastr.success('Delete Successful!')
        window.location.reload()
        return new SaveActionSuccess(res)
      })
      .catch((err) => {
        this.toastr.error(err.error)
        return Observable.of(new SaveActionFail(err));
      })
    )
}