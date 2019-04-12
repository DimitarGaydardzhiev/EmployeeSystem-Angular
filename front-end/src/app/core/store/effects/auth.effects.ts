import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { ActionTypes, LoginSuccessAction, LoginFailAction, RegisterSuccessAction, RegisterFailAction } from "../actions/auth.actions";
import { AuthService } from "../../services/common/auth.service";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { ToastrService } from "../../services";

@Injectable()
export class AuthEffects {
    constructor(private authService: AuthService, private actions: Actions, private router: Router, private toastr: ToastrService) { }

    @Effect() login = this.actions
        .pipe(ofType(ActionTypes.LOGIN))
        .switchMap(loginModel => this.authService.login(loginModel)
            .map(res => {
                this.toastr.success('Login Successful!')
                return new LoginSuccessAction(res)
            })
            .catch((err) => {
                this.toastr.error(err.error)
                return Observable.of(new LoginFailAction(err));
            })
        )

    @Effect({ dispatch: false }) successLogin$ = this
        .actions
        .pipe(ofType(ActionTypes.LOGIN_SUCCESS))
        .do
        (action => this.router.navigate(['/home']))

    @Effect() register = this.actions
        .pipe(ofType(ActionTypes.REGISTER))
        .switchMap(user => this.authService.register(user)
            .map(res => new RegisterSuccessAction(res))
            .catch((err) => {
                this.toastr.error(err.error)
                return Observable.of(new RegisterFailAction(err));
            })
        )

    @Effect({ dispatch: false }) logOut = this.actions
        .pipe(ofType(ActionTypes.LOGOUT))
        .do(() => {
            this.router.navigateByUrl('/home')
                .then(() => window.location.reload())
                .then(() => this.toastr.success("Logout successful!"))
        })
}