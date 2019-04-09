import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class RequestService {
  private object: string = 'Request'

  constructor(private apiService: ApiService) { }

  myRequests(): Observable<any> {
    const resourceUrl = `${this.object}/MyRequests`

    return this.apiService.get(resourceUrl);
  }
}