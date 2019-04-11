import { Action } from '@ngrx/store';
import { BaseModel } from '../../models';

export const ActionTypes = {
    SAVE: "SAVE",
    SAVE_SUCCESS: "SAVE_SUCCESS",
    SAVE_FAIL: "SAVE_FAIL",

    DELETE: "DELETE",
    DELETE_SUCCESS: "DELETE_SUCCESS",
    DELETE_FAIL: "DELETE_FAIL",

    GET_BY_ID: "GET_BY_ID",
    GET_BY_ID_SUCCESS: "SAVE_SUCCESS",
    GET_BY_ID_FAIL: "SAVE_FAIL"
}

export class SaveAction implements Action {
    type = ActionTypes.SAVE

    constructor(public payload: any = null) { }
}

export class SaveActionSuccess implements Action {
    type = ActionTypes.SAVE_SUCCESS

    constructor(public payload: BaseModel[]) { }
}

export class SaveActionFail implements Action {
    type = ActionTypes.SAVE_FAIL

    constructor(public payload: any) { }
}

export class DeleteAction implements Action {
    type = ActionTypes.DELETE

    constructor(public payload: {} = null) { }
}

export class DeleteActionSuccess implements Action {
    type = ActionTypes.DELETE_SUCCESS

    constructor(public payload: BaseModel[]) { }
}

export class DeleteActionFail implements Action {
    type = ActionTypes.DELETE_FAIL

    constructor(public payload: any) { }
}

export class GetByIdAction implements Action {
    type = ActionTypes.GET_BY_ID

    constructor(public payload: any = null) { }
}

export class GetByIdActionSuccess implements Action {
    type = ActionTypes.GET_BY_ID_SUCCESS

    constructor(public payload: BaseModel[]) { }
}

export class GetByIdActionFail implements Action {
    type = ActionTypes.GET_BY_ID_FAIL

    constructor(public payload: any) { }
}

export type Actions
    = SaveAction
    | SaveActionSuccess
    | SaveActionFail

    | DeleteAction
    | DeleteActionSuccess
    | DeleteActionFail

    | GetByIdAction
    | GetByIdActionSuccess
    | GetByIdActionFail