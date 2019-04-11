import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import {
  ActionTypes, GetMyRequestsActionSuccess, GetMyRequestsActionFail,
  GetApprovedRequestsActionSuccess,
  GetApprovedRequestsActionFail,
  GetPendingRequestsActionSuccess,
  GetPendingRequestsActionFail,
  GetRequestTypesActionSuccess,
  GetRequestTypesActionFail,
  ApproveAction,
  ApproveActionSuccess,
  ApproveActionFail,
  UnapproveAction,
  UnapproveActionSuccess,
  UnapproveActionFail,
  GetApprovedRequestsAction,
  GetPendingRequestsAction
} from "../actions/request.actions";
import { Observable } from "rxjs/Observable";
import { RequestService, ToastrService } from "../../services";
import { Store } from "@ngrx/store";
import { State } from "../reducers/role.reducers";

@Injectable()
export class RequestEffects {
  constructor(private service: RequestService, private actions: Actions, private store: Store<State>, private toastr: ToastrService) { }

  @Effect() getMyRequests = this.actions
    .pipe(ofType(ActionTypes.GET_MY_REQUESTS))
    .switchMap(() => this.service.myRequests()
      .map(res => new GetMyRequestsActionSuccess(res))
      .catch((err) => {
        return Observable.of(new GetMyRequestsActionFail(err));
      })
    )

  @Effect() getNewRequests = this.actions
    .pipe(ofType(ActionTypes.GET_APPROVED_REQUESTS))
    .switchMap(() => this.service.approvedRequests()
      .map(res => new GetApprovedRequestsActionSuccess(res))
      .catch((err) => {
        return Observable.of(new GetApprovedRequestsActionFail(err));
      })
    )

  @Effect() getPendingRequests = this.actions
    .pipe(ofType(ActionTypes.GET_PENDING_REQUESTS))
    .switchMap(() => this.service.pendingRequests()
      .map(res => new GetPendingRequestsActionSuccess(res))
      .catch((err) => {
        return Observable.of(new GetPendingRequestsActionFail(err));
      })
    )

  @Effect() getRequestTypes = this.actions
    .pipe(ofType(ActionTypes.GET_REQUEST_TYPES))
    .switchMap(() => this.service.getRequestTypes()
      .map(res => new GetRequestTypesActionSuccess(res))
      .catch((err) => {
        return Observable.of(new GetRequestTypesActionFail(err));
      })
    )

  @Effect({ dispatch: false }) approveRequest = this.actions
    .pipe(ofType<ApproveAction>(ActionTypes.APPROVE))
    .switchMap(action => this.service.approveRequest(action.payload)
      .map(res => {
        this.toastr.success('Approve Successful!')
        return this.store.dispatch(new GetPendingRequestsAction())
      })
      .catch((err) => {
        this.toastr.error(err)
        return Observable.of(new ApproveActionFail(err));
      })
    )

  @Effect({ dispatch: false }) unapproveRequest = this.actions
    .pipe(ofType<UnapproveAction>(ActionTypes.UNAPPROVE))
    .switchMap(action => this.service.unapproveRequest(action.payload)
      .map(res => {
        this.toastr.success('Unapprove Successful!')
        return this.store.dispatch(new GetApprovedRequestsAction())
      })
      .catch((err) => {
        this.toastr.error(err)
        return Observable.of(new UnapproveActionFail(err));
      })
    )
}