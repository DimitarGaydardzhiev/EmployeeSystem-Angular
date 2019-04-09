import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { ActionTypes, GetAllDepartmentsActionSuccess, GetAllDepartmentsActionFail } from "../actions/department.actions";
import { Observable } from "rxjs/Observable";
import { DepartmentService } from "../../services";

@Injectable()
export class DepartmentEffects {
  constructor(private service: DepartmentService, private actions: Actions) { }

  @Effect() getAllDepartments = this.actions
    .pipe(ofType(ActionTypes.GET_ALL_DEPARTMENTS))
    .switchMap(() => this.service.all()
      .map(res => new GetAllDepartmentsActionSuccess(res))
      .catch((err) => {
        return Observable.of(new GetAllDepartmentsActionFail(err));
      })
    )
}