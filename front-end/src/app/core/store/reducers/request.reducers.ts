import * as request from '../actions/request.actions'
import { Request } from '../../models/request/request.model';

export interface State {
  requests: Request[]
  approvedRequests: Request[]
}

const initialState: State = {
  requests: [],
  approvedRequests: []
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
    default: {
      return state;
    }
  }
}

export const getMyRequests = (state: State) => state.requests
export const getApprovedRequests = (state: State) => state.approvedRequests