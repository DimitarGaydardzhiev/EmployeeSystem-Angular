import { Injectable } from "@angular/core";
import * as dev from "../../../../environments/environment";
import * as prod from "../../../../environments/environment.prod";
import { Headers, Response } from "@angular/http";
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { State, getAuthState } from "../../store/reducers";
import { LogoutAction } from "../../store/actions/auth.actions";
import { SetLoadingStateAction } from "../../store/actions/loading.actions";

@Injectable()
export class ApiService {
    headers: HttpHeaders = new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        TimeZoneID: "UTC"
    })

    apiUrl: string = 'http://localhost:54330/'
    tokenBaseUrl: 'http://localhost:54330/account/login'
    isLoggedIn: boolean

    constructor(
        private http: HttpClient,
        private store: Store<State>) {
        this.store.select(getAuthState).subscribe(auth => {
            this.isLoggedIn = auth.loggedIn
            this.headers = this.headers.set('Authorization', `Bearer ${auth.accessToken}`)

            if (auth.user) {
                this.headers = this.headers.set('UserId', `${auth.user.id}`)
            }
        })
    }

    private checkForServerError(error: HttpErrorResponse): Observable<any> {
        this.store.dispatch(new SetLoadingStateAction(false))

        const JsonParseError = 'Http failure during parsing'
        const matches = error.message.match(new RegExp(JsonParseError, 'ig'))

        if (error.status === 200 && matches.length === 1) {
            return Observable.of(error.error.text)
        }

        // TODO: add modal
        if (this.isLoggedIn && error.status === 401) {
            console.log("Your session hase timed out, or you are not authorized to view this resource")
            this.store.dispatch(new LogoutAction(null))
        } else if (error.error instanceof Error) {
            console.log(error.error.message)
        } else {
            console.log(error.statusText)
        }

        return Observable.throw(error)
    }

    private executeHttpMethod(httpMethod: string, url: string, data?: { [key: string]: any }, isBackground = false): Observable<any> {
        if (!isBackground) {
            this.store.dispatch(new SetLoadingStateAction(true))
        }

        const httpMethodName: string = httpMethod.toLowerCase()

        const request$: Observable<Response> = data ?
            this.http[httpMethodName](`${this.apiUrl}${url}`, data, { headers: this.headers }) :
            this.http[httpMethodName](`${this.apiUrl}${url}`, { headers: this.headers })

        return request$
            .catch(error => this.checkForServerError(error))
            .finally(() => {
                if (!isBackground) {
                    this.store.dispatch(new SetLoadingStateAction(false))
                }
            })
    }

    get(path: string, isBackground = false): Observable<any> {
        return this.executeHttpMethod('get', path, null, isBackground);
    }

    post(path: string, body, isBackground = false): Observable<any> {
        return this.executeHttpMethod('post', path, body, isBackground);
    }

    put(path: string, body, isBackground = false): Observable<any> {
        return this.executeHttpMethod('put', path, body, isBackground);
    }

    delete(path: string, isBackground = false): Observable<any> {
        return this.executeHttpMethod('delete', path, null, isBackground);
    }

    login(loginModel): Observable<any> {
        this.store.dispatch(new SetLoadingStateAction(true))
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'TimeZoneID': 'UTC'
        })

        let data = "email=" + loginModel.payload.loginEmail + "&password=" + loginModel.payload.loginPassword + "&siteMode=real"
        data = data.replace('+', '%2B')

        return this.http.post(this.tokenBaseUrl, data, { headers: headers })
            .catch(error => this.checkForServerError(error))
            .finally(() => this.store.dispatch(new SetLoadingStateAction(false)))
    }
}