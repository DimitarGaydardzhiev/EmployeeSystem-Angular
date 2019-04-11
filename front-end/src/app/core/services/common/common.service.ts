import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CommonService {
  constructor(private apiService: ApiService) { }

  save(model): Observable<any> {
    const resourceUrl = `${model.objectType}/Save`

    return this.apiService.post(resourceUrl, model);
  }

  delete(model): Observable<any> {
    const resourceUrl = `${model.object}/Delete/${model.id}`

    return this.apiService.delete(resourceUrl);
  }

  getById(objectType, id): Observable<any> {
    const resourceUrl = `${objectType}/GetById/${id}`

    return this.apiService.get(resourceUrl);
  }
}
