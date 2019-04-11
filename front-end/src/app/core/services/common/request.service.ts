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

  approvedRequests(): Observable<any> {
    const resourceUrl = `${this.object}/Approved`

    return this.apiService.get(resourceUrl);
  }

  pendingRequests(): Observable<any> {
    const resourceUrl = `${this.object}/Pending`

    return this.apiService.get(resourceUrl);
  }

  getRequestTypes(): Observable<any> {
    const resourceUrl = `${this.object}/GetRequestTypes`

    return this.apiService.get(resourceUrl);
  }

  approveRequest(id): Observable<any> {
    const resourceUrl = `${this.object}/Approve`

    return this.apiService.post(resourceUrl, id);
  }

  unapproveRequest(id): Observable<any> {
    const resourceUrl = `${this.object}/Unapprove`

    return this.apiService.post(resourceUrl, id);
  }
}
