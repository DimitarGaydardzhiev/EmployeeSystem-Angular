import { BaseModel } from "../base.model";

export class Employee extends BaseModel {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}