import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
    private object: string = 'Account'

    constructor(private apiService: ApiService) { }

    login(loginModel): Observable<any> {
        return this.apiService.login(loginModel);
    }

    register(user): Observable<any> {
        const resourceUrl = `${this.object}/Register`

        return this.apiService.post(resourceUrl, user.payload);
    }
}
