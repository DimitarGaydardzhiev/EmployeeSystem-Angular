import { BaseModel } from "../base.model";
import { RequestType } from "./request-type";

export class Request extends BaseModel {
  requestType: RequestType
  from: any
  to: any
  isApproved: boolean
  description: string
  requestTypeId: number
}
