import { BaseModel } from "../base.model";
import { RequestType } from "./request-type";

export class Request extends BaseModel {
  requestType: RequestType
  from: Date
  to: Date
  isApproved: boolean
  description: string
}
