import * as position from '../actions/position.actions'
import { Position } from '../../models/position/position.model';

export interface State {
  positions: Position[]
}

const initialState: State = {
  positions: []
}

export function reducer(state = initialState, action: position.Actions): State {
  switch (action.type) {
    case position.ActionTypes.GET_ALL_POSITIONS_SUCCESS: {
      return Object.assign({}, state, {
        positions: [...action.payload]
      });
    }
    case position.ActionTypes.GET_ALL_POSITIONS_FAIL: {
      return Object.assign({}, initialState)
    }
    default: {
      return state;
    }
  }
}

export const getPositions = (state: State) => state.positions