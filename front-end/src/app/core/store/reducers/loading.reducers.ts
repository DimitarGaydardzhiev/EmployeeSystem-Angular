import * as loadingMask from '../actions/loading.actions'

export interface State {
    objLoaderStatus: boolean
}

const initialState: State = {
    objLoaderStatus: false
}

export function reducer(state = initialState, action: loadingMask.Actions): State {
    switch (action.type) {
        case loadingMask.ActionTypes.SET_LOADING_STATE: {
            return Object.assign({}, state, {
                objLoaderStatus: action.payload
            })
        }
        default: {
            return state;
        }
    }
}

export const getLoaderStatus = (state: State) => state.objLoaderStatus