import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class EmployeeService {
  private object: string = 'Employee'

  constructor(private apiService: ApiService) { }

  all(): Observable<any> {
    const resourceUrl = `${this.object}/All`

    return this.apiService.get(resourceUrl);
  }

  former(): Observable<any> {
    const resourceUrl = `${this.object}/Former`

    return this.apiService.get(resourceUrl);
  }

  allRoles(): Observable<any> {
    const resourceUrl = `${this.object}/GetRoles`

    return this.apiService.get(resourceUrl);
  }
}
