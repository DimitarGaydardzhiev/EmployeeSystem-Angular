import { Action } from '@ngrx/store';
import { BaseModel } from '../../models';

export const ActionTypes = {
    GET_MY_REQUESTS: "GET_MY_REQUESTS",
    GET_MY_REQUESTS_SUCCESS: "GET_MY_REQUESTS_SUCCESS",
    GET_MY_REQUESTS_FAIL: "GET_MY_REQUESTS_FAIL",

    GET_APPROVED_REQUESTS: "GET_APPROVED_REQUESTS",
    GET_APPROVED_REQUESTS_SUCCESS: "GET_APPROVED_REQUESTS_SUCCESS",
    GET_APPROVED_REQUESTS_FAIL: "GET_APPROVED_REQUESTS_FAIL",

    GET_PENDING_REQUESTS: "GET_PENDING_REQUESTS",
    GET_PENDING_REQUESTS_SUCCESS: "GET_PENDING_REQUESTS_SUCCESS",
    GET_PENDING_REQUESTS_FAIL: "GET_PENDING_REQUESTS_FAIL",

    GET_REQUEST_TYPES: "GET_REQUEST_TYPES",
    GET_REQUEST_TYPES_SUCCESS: "GET_REQUEST_TYPES_SUCCESS",
    GET_REQUEST_TYPES_FAIL: "GET_REQUEST_TYPES_FAIL",

    APPROVE: "APPROVE",
    APPROVE_SUCCESS: "APPROVE_SUCCESS",
    APPROVE_FAIL: "APPROVE_FAIL",

    UNAPPROVE: "UNAPPROVE",
    UNAPPROVE_SUCCESS: "UNAPPROVE_SUCCESS",
    UNAPPROVE_FAIL: "UNAPPROVE_FAIL"
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

export class GetRequestTypesAction implements Action {
    type = ActionTypes.GET_REQUEST_TYPES

    constructor(public payload: any = null) { }
}

export class GetRequestTypesActionSuccess implements Action {
    type = ActionTypes.GET_REQUEST_TYPES_SUCCESS

    constructor(public payload: BaseModel[]) { }
}

export class GetRequestTypesActionFail implements Action {
    type = ActionTypes.GET_REQUEST_TYPES_FAIL

    constructor(public payload: any) { }
}

export class ApproveAction implements Action {
    type = ActionTypes.APPROVE

    constructor(public payload: number = null) { }
}

export class ApproveActionSuccess implements Action {
    type = ActionTypes.APPROVE_SUCCESS

    constructor(public payload: any) { }
}

export class ApproveActionFail implements Action {
    type = ActionTypes.APPROVE_FAIL

    constructor(public payload: any) { }
}

export class UnapproveAction implements Action {
    type = ActionTypes.UNAPPROVE

    constructor(public payload: number = null) { }
}

export class UnapproveActionSuccess implements Action {
    type = ActionTypes.UNAPPROVE_SUCCESS

    constructor(public payload: any) { }
}

export class UnapproveActionFail implements Action {
    type = ActionTypes.UNAPPROVE_FAIL

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

    | GetRequestTypesAction
    | GetRequestTypesActionSuccess
    | GetRequestTypesActionFail

    | ApproveAction
    | ApproveActionSuccess
    | ApproveActionFail

    | UnapproveAction
    | UnapproveActionSuccess
    | UnapproveActionFail