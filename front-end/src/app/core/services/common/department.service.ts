import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DepartmentService {
  private object: string = 'Department'

  constructor(private apiService: ApiService) { }

  all(): Observable<any> {
    const resourceUrl = `${this.object}/All`

    return this.apiService.get(resourceUrl);
  }
}
