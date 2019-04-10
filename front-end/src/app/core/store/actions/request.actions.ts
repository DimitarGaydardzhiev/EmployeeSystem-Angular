import { Action } from '@ngrx/store';

export const ActionTypes = {
    GET_MY_REQUESTS: "GET_MY_REQUESTS",
    GET_MY_REQUESTS_SUCCESS: "GET_MY_REQUESTS_SUCCESS",
    GET_MY_REQUESTS_FAIL: "GET_MY_REQUESTS_FAIL",

    GET_APPROVED_REQUESTS: "GET_APPROVED_REQUESTS",
    GET_APPROVED_REQUESTS_SUCCESS: "GET_APPROVED_REQUESTS_SUCCESS",
    GET_APPROVED_REQUESTS_FAIL: "GET_APPROVED_REQUESTS_FAIL",

    GET_PENDING_REQUESTS: "GET_PENDING_REQUESTS",
    GET_PENDING_REQUESTS_SUCCESS: "GET_PENDING_REQUESTS_SUCCESS",
    GET_PENDING_REQUESTS_FAIL: "GET_PENDING_REQUESTS_FAIL"
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

export class GetApprovedRequestsAction implements Action {
    type = ActionTypes.GET_APPROVED_REQUESTS

    constructor(public payload: any = null) { }
}

export class GetApprovedRequestsActionSuccess implements Action {
    type = ActionTypes.GET_APPROVED_REQUESTS_SUCCESS

    constructor(public payload: Request[]) { }
}

export class GetApprovedRequestsActionFail implements Action {
    type = ActionTypes.GET_APPROVED_REQUESTS_FAIL

    constructor(public payload: any) { }
}

export class GetPendingRequestsAction implements Action {
    type = ActionTypes.GET_PENDING_REQUESTS

    constructor(public payload: any = null) { }
}

export class GetPendingRequestsActionSuccess implements Action {
    type = ActionTypes.GET_PENDING_REQUESTS_SUCCESS

    constructor(public payload: Request[]) { }
}

export class GetPendingRequestsActionFail implements Action {
    type = ActionTypes.GET_PENDING_REQUESTS_FAIL

    constructor(public payload: any) { }
}

export type Actions
    = GetMyRequestsAction
    | GetMyRequestsActionSuccess
    | GetMyRequestsActionFail

    | GetApprovedRequestsAction
    | GetApprovedRequestsActionSuccess
    | GetApprovedRequestsActionFail

    | GetPendingRequestsAction
    | GetPendingRequestsActionSuccess
    | GetPendingRequestsActionFail