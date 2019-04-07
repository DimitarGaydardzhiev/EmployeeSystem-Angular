import { Action } from '@ngrx/store';

export const ActionTypes = {
    SET_LOADING_STATE: "SET_LOADING_STATE"
}

export class SetLoadingStateAction implements Action {
    type = ActionTypes.SET_LOADING_STATE

    constructor(public payload: boolean) { }
}

export type Actions
    = SetLoadingStateAction