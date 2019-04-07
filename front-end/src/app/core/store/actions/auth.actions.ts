import { Action } from '@ngrx/store';
import { UserRegistrationModel, UserLoginModel } from '../../models';

export const ActionTypes = {
    LOGIN: "LOGIN",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAIL: "LOGIN_FAIL",

    REGISTER: "REGISTER",
    REGISTER_SUCCESS: "REGISTER_SUCCESS",
    REGISTER_FAIL: "REGISTER_FAIL",

    LOGOUT: "LOGOUT"
}

export class LoginAction implements Action {
    type = ActionTypes.LOGIN

    constructor(public payload: UserLoginModel) { }
}

export class LogoutAction implements Action {
    type = ActionTypes.LOGOUT

    constructor(public payload: null) { }
}

export class LoginSuccessAction implements Action {
    type = ActionTypes.LOGIN_SUCCESS

    constructor(public payload: any) { }
}

export class LoginFailAction implements Action {
    type = ActionTypes.LOGIN_FAIL

    constructor(public payload: any) { }
}

export class RegisterAction implements Action {
    type = ActionTypes.REGISTER

    constructor(public payload: UserRegistrationModel) { }
}

export class RegisterSuccessAction implements Action {
    type = ActionTypes.REGISTER_SUCCESS

    constructor(public payload: any) { }
}

export class RegisterFailAction implements Action {
    type = ActionTypes.REGISTER_FAIL

    constructor(public payload: any) { }
}

export type Actions
    = LoginAction
    | LoginSuccessAction
    | LoginFailAction

    | RegisterAction
    | RegisterSuccessAction
    | RegisterFailAction

    | LogoutAction