import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { State, getAuthState } from "../../store/reducers";
import { LogoutAction } from "../../store/actions/auth.actions";
import { SetLoadingStateAction } from "../../store/actions/loading.actions";

@Injectable()
export class ApiService {
    apiUrl: string = 'http://localhost:54330/'
    isLoggedIn: boolean

    constructor(
        private http: HttpClient,
        private store: Store<State>) {
        this.store.select(getAuthState).subscribe(auth => {
            this.isLoggedIn = auth.loggedIn
        })
    }

    private checkForServerError(error: HttpErrorResponse): Observable<any> {
        this.store.dispatch(new SetLoadingStateAction(false))

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

    private executeHttpMethod(httpMethod: string, url: string, data?: { [key: string]: any }): Observable<any> {
        this.store.dispatch(new SetLoadingStateAction(true))

        const httpMethodName: string = httpMethod.toLowerCase()

        const request: Observable<Response> = data ?
            this.http[httpMethodName](`${this.apiUrl}${url}`, data) :
            this.http[httpMethodName](`${this.apiUrl}${url}`)

        return request
            .catch(error => this.checkForServerError(error))
            .finally(() => {
                this.store.dispatch(new SetLoadingStateAction(false))
            })
    }

    get(path: string): Observable<any> {
        return this.executeHttpMethod('get', path, null);
    }

    post(path: string, body): Observable<any> {
        return this.executeHttpMethod('post', path, body);
    }

    put(path: string, body): Observable<any> {
        return this.executeHttpMethod('put', path, body);
    }

    delete(path: string): Observable<any> {
        return this.executeHttpMethod('delete', path, null);
    }

    login(loginModel): Observable<any> {
        this.store.dispatch(new SetLoadingStateAction(true))

        let data = "email=" + loginModel.payload.email + "&password=" + loginModel.payload.password + "&siteMode=real"
        data = data.replace('+', '%2B')

        return this.http.post('http://localhost:54330/account/login', data)
            .catch(error => this.checkForServerError(error))
            .finally(() => this.store.dispatch(new SetLoadingStateAction(false)))
    }
}