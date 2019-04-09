import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { ActionTypes, GetAllRolesActionSuccess, GetAllRolesActionFail } from "../actions/role.actions";
import { Observable } from "rxjs/Observable";
import { EmployeeService } from "../../services";

@Injectable()
export class RoleEffects {
  constructor(private service: EmployeeService, private actions: Actions) { }

  @Effect() getAllRoles = this.actions
    .pipe(ofType(ActionTypes.GET_ALL_ROLES))
    .switchMap(() => this.service.allRoles()
      .map(res => new GetAllRolesActionSuccess(res))
      .catch((err) => {
        return Observable.of(new GetAllRolesActionFail(err));
      })
    )
}