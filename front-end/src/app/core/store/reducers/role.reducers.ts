import * as role from '../actions/role.actions'
import { BaseModel } from '../../models';

export interface State {
  roles: BaseModel[]
}

const initialState: State = {
  roles: []
}

export function reducer(state = initialState, action: role.Actions): State {
  switch (action.type) {
    case role.ActionTypes.GET_ALL_ROLES_SUCCESS: {
      return Object.assign({}, state, {
        roles: [...action.payload]
      });
    }
    case role.ActionTypes.GET_ALL_ROLES_FAIL: {
      return Object.assign({}, initialState)
    }
    default: {
      return state;
    }
  }
}

export const getAllRoles = (state: State) => state.roles