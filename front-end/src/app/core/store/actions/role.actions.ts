import { Action } from '@ngrx/store';
import { BaseModel } from '../../models';

export const ActionTypes = {
  GET_ALL_ROLES: "GET_ALL_ROLES",
  GET_ALL_ROLES_SUCCESS: "GET_ALL_ROLES_SUCCESS",
  GET_ALL_ROLES_FAIL: "GET_ALL_ROLES_FAIL"
}

export class GetAllRolesAction implements Action {
    type = ActionTypes.GET_ALL_ROLES

    constructor(public payload: any = null) { }
}

export class GetAllRolesActionSuccess implements Action {
    type = ActionTypes.GET_ALL_ROLES_SUCCESS

    constructor(public payload: BaseModel[]) { }
}

export class GetAllRolesActionFail implements Action {
    type = ActionTypes.GET_ALL_ROLES_FAIL

    constructor(public payload: any) { }
}

export type Actions
    = GetAllRolesAction
    | GetAllRolesActionSuccess
    | GetAllRolesActionFail