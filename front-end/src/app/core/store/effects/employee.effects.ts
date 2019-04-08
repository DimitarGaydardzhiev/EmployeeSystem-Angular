import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import {
  ActionTypes, GetAllEmployeesAction, GetAllFormerEmployeesActionSuccess,
  GetAllCurrentEmployeesActionFail, GetAllFormerEmployeesActionFail, GetAllCurrentEmployeesActionSuccess
} from "../actions/employee.actions";
import { Observable } from "rxjs/Observable";
import { EmployeeService } from "../../services";

@Injectable()
export class EmployeeEffects {
  areFormer: boolean
  constructor(private service: EmployeeService, private actions: Actions) { }

  @Effect() getAllEmployees = this.actions
    .pipe(ofType<GetAllEmployeesAction>(ActionTypes.GET_ALL_EMPLOYEES))
    .switchMap(action => {
      this.areFormer = action.payload
      if (this.areFormer) {
        return this.service.former()
      } else {
        return this.service.all()
      }
    })
    .map(res => {
      if (this.areFormer) {
        return new GetAllFormerEmployeesActionSuccess(res)
      } else {
        return new GetAllCurrentEmployeesActionSuccess(res)
      }
    })
    .catch((err) => {
      if (this.areFormer) {
        return Observable.of(new GetAllFormerEmployeesActionFail(err));
      } else {
        return Observable.of(new GetAllCurrentEmployeesActionFail(err));
      }
    })
}