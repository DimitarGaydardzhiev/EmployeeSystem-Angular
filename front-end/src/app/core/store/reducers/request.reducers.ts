import * as request from '../actions/request.actions'
import { Request } from '../../models/request/request.model';

export interface State {
  requests: Request[]
}

const initialState: State = {
  requests: []
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
    default: {
      return state;
    }
  }
}

export const getMyRequests = (state: State) => state.requests