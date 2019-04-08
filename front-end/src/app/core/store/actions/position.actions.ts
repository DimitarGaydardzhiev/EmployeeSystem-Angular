import { Action } from '@ngrx/store';
import { Position } from '../../models/position/position.model';

export const ActionTypes = {
  GET_ALL_POSITIONS: "GET_ALL_POSITIONS",
  GET_ALL_POSITIONS_SUCCESS: "GET_ALL_POSITIONS_SUCCESS",
  GET_ALL_POSITIONS_FAIL: "GET_ALL_POSITIONS_FAIL"
}

export class GetAllPositionsAction implements Action {
    type = ActionTypes.GET_ALL_POSITIONS

    constructor(public payload: any = null) { }
}

export class GetAllPositionsActionSuccess implements Action {
    type = ActionTypes.GET_ALL_POSITIONS_SUCCESS

    constructor(public payload: Position[]) { }
}

export class GetAllPositionsActionFail implements Action {
    type = ActionTypes.GET_ALL_POSITIONS_FAIL

    constructor(public payload: boolean) { }
}

export type Actions
    = GetAllPositionsAction
    | GetAllPositionsActionSuccess
    | GetAllPositionsActionFail