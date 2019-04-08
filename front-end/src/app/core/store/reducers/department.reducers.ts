import * as department from '../actions/department.actions'
import { Department } from '../../models/department/department.model';

export interface State {
  departments: Department[]
}

const initialState: State = {
  departments: []
}

export function reducer(state = initialState, action: department.Actions): State {
  switch (action.type) {
    case department.ActionTypes.GET_ALL_DEPARTMENTS_SUCCESS: {
      return Object.assign({}, state, {
        departments: [...action.payload]
      });
    }
    case department.ActionTypes.GET_ALL_DEPARTMENTS_FAIL: {
      return Object.assign({}, initialState)
    }
    default: {
      return state;
    }
  }
}

export const getDepartments = (state: State) => state.departments