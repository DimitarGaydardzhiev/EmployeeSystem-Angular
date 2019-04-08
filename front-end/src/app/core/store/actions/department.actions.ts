import { Action } from '@ngrx/store';
import { Department } from '../../models/department/department.model';

export const ActionTypes = {
  GET_ALL_DEPARTMENTS: "GET_ALL_DEPARTMENTS",
  GET_ALL_DEPARTMENTS_SUCCESS: "GET_ALL_DEPARTMENTS_SUCCESS",
  GET_ALL_DEPARTMENTS_FAIL: "GET_ALL_DEPARTMENTS_FAIL"
}

export class GetAllDepartmentsAction implements Action {
    type = ActionTypes.GET_ALL_DEPARTMENTS

    constructor(public payload: any = null) { }
}

export class GetAllDepartmentsActionSuccess implements Action {
    type = ActionTypes.GET_ALL_DEPARTMENTS_SUCCESS

    constructor(public payload: Department[]) { }
}

export class GetAllDepartmentsActionFail implements Action {
    type = ActionTypes.GET_ALL_DEPARTMENTS_FAIL

    constructor(public payload: boolean) { }
}

export type Actions
    = GetAllDepartmentsAction
    | GetAllDepartmentsActionSuccess
    | GetAllDepartmentsActionFail