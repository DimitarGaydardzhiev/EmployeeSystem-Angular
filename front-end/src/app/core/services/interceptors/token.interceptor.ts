import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../common/auth.service';
import { Store } from '@ngrx/store';
import { State, getAuthState } from '../../store/reducers';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    token: string
    userId: number

    constructor(public auth: AuthService, private store: Store<State>) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.store.select(getAuthState).subscribe(auth => {
            this.token = auth.accessToken
            if (auth.user) {
                this.userId = auth.user.id
            }
        })
        let contentType = "application/json"

        if (request.url.endsWith('login')) {
            contentType = "application/x-www-form-urlencoded"
        }

        request = request.clone({
            setHeaders: {
                "Authorization": `Bearer ${this.token}`,
                "UserId": `${this.userId}`,
                "Content-Type": contentType,
                Accept: "application/json",
                TimeZoneID: "UTC"
            }
        });

        return next.handle(request);
    }
}