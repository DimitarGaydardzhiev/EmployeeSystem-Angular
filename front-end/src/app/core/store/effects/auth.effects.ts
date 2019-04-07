import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { ActionTypes, LoginSuccessAction, LoginFailAction, RegisterSuccessAction, RegisterFailAction } from "../actions/auth.actions";
import { AuthService } from "../../services/common/auth.service";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
    constructor(private authService: AuthService, private actions: Actions, private router: Router) { }

    @Effect() login$ = this.actions
        .pipe(ofType(ActionTypes.LOGIN))
        .switchMap(loginModel => this.authService.login(loginModel)
            .map(res => new LoginSuccessAction(res))
            .catch((err) => {
                return Observable.of(new LoginFailAction(err));
            })
        )

    @Effect() register$ = this.actions
        .pipe(ofType(ActionTypes.REGISTER))
        .switchMap(user => this.authService.register(user)
            .map(res => new RegisterSuccessAction(res))
            .catch((err) => {
                return Observable.of(new RegisterFailAction(err));
            })
        )

    // @Effect({ dispatch: false }) logOut$ = this.actions$
    //     .ofType(ActionTypes.LOGOUT)
    //     .do(action => {
    //         window.location.reload()
    //     })

    @Effect({ dispatch: false }) logAction$ = this.actions.do
        (action => console.log(action))

    // @Effect({ dispatch: false }) loginSuccess$ = this.actions$
    //     .ofType(ActionTypes.LOGIN_SUCCESS)
    //     .do(action => this.router.navigate(['./home']))
}