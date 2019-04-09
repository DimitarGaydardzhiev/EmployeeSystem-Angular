import { Action } from '@ngrx/store';

export const ActionTypes = {
  GET_MY_REQUESTS: "GET_MY_REQUESTS",
  GET_MY_REQUESTS_SUCCESS: "GET_MY_REQUESTS_SUCCESS",
  GET_MY_REQUESTS_FAIL: "GET_MY_REQUESTS_FAIL"
}

export class GetMyRequestsAction implements Action {
    type = ActionTypes.GET_MY_REQUESTS

    constructor(public payload: number) { }
}

export class GetMyRequestsActionSuccess implements Action {
    type = ActionTypes.GET_MY_REQUESTS_SUCCESS

    constructor(public payload: Request[]) { }
}

export class GetMyRequestsActionFail implements Action {
    type = ActionTypes.GET_MY_REQUESTS_FAIL

    constructor(public payload: any) { }
}

export type Actions
    = GetMyRequestsAction
    | GetMyRequestsActionSuccess
    | GetMyRequestsActionFail