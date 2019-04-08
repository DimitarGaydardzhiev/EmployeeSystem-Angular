import * as employee from '../actions/employee.actions'
import { Employee } from '../../models/employee/employee.model';

export interface State {
  currentEmployees: Employee[],
  formerEmployees: Employee[]
}

const initialState: State = {
  currentEmployees: [],
  formerEmployees: []
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
    default: {
      return state;
    }
  }
}

export const getCurrentEmployees = (state: State) => state.currentEmployees
export const getFormerEmployees = (state: State) => state.formerEmployees