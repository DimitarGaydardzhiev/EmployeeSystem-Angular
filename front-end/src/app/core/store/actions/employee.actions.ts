import { Action } from '@ngrx/store';
import { Employee } from '../../models/employee/employee.model';

export const ActionTypes = {
    GET_ALL_EMPLOYEES: "GET_ALL_EMPLOYEES",

    GET_ALL_CURRENT_EMPLOYEES_SUCCESS: "GET_ALL_CURRENT_EMPLOYEES_SUCCESS",
    GET_ALL_CURRENT_EMPLOYEES_FAIL: "GET_ALL_CURRENT_EMPLOYEES_FAIL",

    GET_ALL_FORMER_EMPLOYEES_SUCCESS: "GET_ALL_FORMER_EMPLOYEES_SUCCESS",
    GET_ALL_FORMER_EMPLOYEES_FAIL: "GET_ALL_FORMER_EMPLOYEES_FAIL",

    GET_PROFILE_INFO: "GET_PROFILE_INFO",
    GET_PROFILE_INFO_SUCCESS: "GET_PROFILE_INFO_SUCCESS",
    GET_PROFILE_INFO_FAIL: "GET_PROFILE_INFO_FAIL"
}

export class GetAllEmployeesAction implements Action {
    type = ActionTypes.GET_ALL_EMPLOYEES

    constructor(public payload: boolean) { }
}

export class GetAllCurrentEmployeesActionSuccess implements Action {
    type = ActionTypes.GET_ALL_CURRENT_EMPLOYEES_SUCCESS

    constructor(public payload: Employee[]) { }
}

export class GetAllCurrentEmployeesActionFail implements Action {
    type = ActionTypes.GET_ALL_CURRENT_EMPLOYEES_FAIL

    constructor(public payload: any) { }
}

export class GetAllFormerEmployeesActionSuccess implements Action {
    type = ActionTypes.GET_ALL_FORMER_EMPLOYEES_SUCCESS

    constructor(public payload: Employee[]) { }
}

export class GetAllFormerEmployeesActionFail implements Action {
    type = ActionTypes.GET_ALL_FORMER_EMPLOYEES_FAIL

    constructor(public payload: any) { }
}

export class GetProfileInfoAction implements Action {
    type = ActionTypes.GET_PROFILE_INFO

    constructor(public payload: any = null) { }
}

export class GetProfileInfoSuccessAction implements Action {
    type = ActionTypes.GET_PROFILE_INFO_SUCCESS

    constructor(public payload: any) { }
}

export class GetProfileInfoFailAction implements Action {
    type = ActionTypes.GET_PROFILE_INFO_FAIL

    constructor(public payload: any) { }
}

export type Actions
    = GetAllEmployeesAction

    | GetAllCurrentEmployeesActionSuccess
    | GetAllCurrentEmployeesActionFail

    | GetAllFormerEmployeesActionSuccess
    | GetAllFormerEmployeesActionFail

    | GetProfileInfoAction
    | GetProfileInfoSuccessAction
    | GetProfileInfoFailAction