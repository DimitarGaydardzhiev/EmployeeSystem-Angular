import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class SaveService {
  constructor(private apiService: ApiService) { }

  save(model): Observable<any> {
    const resourceUrl = `${model.objectType}/Save`

    return this.apiService.post(resourceUrl, model);
  }
}
