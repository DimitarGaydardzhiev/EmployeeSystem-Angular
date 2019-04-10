import * as request from '../actions/request.actions'
import { Request } from '../../models/request/request.model';
import { BaseModel } from '../../models';

export interface State {
  requests: Request[]
  approvedRequests: Request[]
  pendingRequests: Request[]
  requestTypes: BaseModel[]
}

const initialState: State = {
  requests: [],
  approvedRequests: [],
  pendingRequests: [],
  requestTypes: []
}

export function reducer(state = initialState, action: request.Actions): State {
  switch (action.type) {
    case request.ActionTypes.GET_MY_REQUESTS_SUCCESS: {
      return Object.assign({}, state, {
        requests: [...action.payload]
      });
    }
    case request.ActionTypes.GET_MY_REQUESTS_FAIL: {
      return Object.assign({}, initialState)
    }
    case request.ActionTypes.GET_APPROVED_REQUESTS_SUCCESS: {
      return Object.assign({}, state, {
        approvedRequests: [...action.payload]
      });
    }
    case request.ActionTypes.GET_APPROVED_REQUESTS_FAIL: {
      return Object.assign({}, initialState)
    }
    case request.ActionTypes.GET_PENDING_REQUESTS_SUCCESS: {
      return Object.assign({}, state, {
        pendingRequests: [...action.payload]
      });
    }
    case request.ActionTypes.GET_PENDING_REQUESTS_FAIL: {
      return Object.assign({}, initialState)
    }
    case request.ActionTypes.GET_REQUEST_TYPES_SUCCESS: {
      return Object.assign({}, state, {
        requestTypes: [...action.payload]
      });
    }
    case request.ActionTypes.GET_REQUEST_TYPES_FAIL: {
      return Object.assign({}, initialState)
    }
    default: {
      return state;
    }
  }
}

export const getMyRequests = (state: State) => state.requests
export const getApprovedRequests = (state: State) => state.approvedRequests
export const getPendingRequests = (state: State) => state.pendingRequests
export const getRequestTypes = (state: State) => state.requestTypes