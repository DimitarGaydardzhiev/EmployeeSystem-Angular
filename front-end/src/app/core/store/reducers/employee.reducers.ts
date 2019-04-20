import * as employee from '../actions/employee.actions'
import { Employee } from '../../models/employee/employee.model';
import { ProfileInfo } from '../../models/employee/profile-info';

export interface State {
  currentEmployees: Employee[],
  formerEmployees: Employee[],
  profileInfo: ProfileInfo
}

const initialState: State = {
  currentEmployees: [],
  formerEmployees: [],
  profileInfo: new ProfileInfo()
}

export function reducer(state = initialState, action: employee.Actions): State {
  switch (action.type) {
    case employee.ActionTypes.GET_ALL_CURRENT_EMPLOYEES_SUCCESS: {
      return Object.assign({}, state, {
        currentEmployees: [...action.payload]
      });
    }
    case employee.ActionTypes.GET_ALL_CURRENT_EMPLOYEES_FAIL: {
      return Object.assign({}, state, {
        currentEmployees: initialState.currentEmployees
      });
    }
    case employee.ActionTypes.GET_ALL_FORMER_EMPLOYEES_SUCCESS: {
      return Object.assign({}, state, {
        formerEmployees: [...action.payload]
      });
    }
    case employee.ActionTypes.GET_ALL_FORMER_EMPLOYEES_FAIL: {
      return Object.assign({}, state, {
        formerEmployees: initialState.formerEmployees
      });
    }
    case employee.ActionTypes.GET_PROFILE_INFO_SUCCESS: {
      return Object.assign({}, state, {
        profileInfo: action.payload
      });
    }
    case employee.ActionTypes.GET_PROFILE_INFO_FAIL: {
      return Object.assign({}, state, {
        profileInfo: initialState.profileInfo
      });
    }
    default: {
      return state;
    }
  }
}

export const getCurrentEmployees = (state: State) => state.currentEmployees
export const getFormerEmployees = (state: State) => state.formerEmployees
export const getProfileInfo = (state: State) => state.profileInfo