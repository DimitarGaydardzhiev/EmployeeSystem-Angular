import * as auth from '../actions/auth.actions'
import * as decode from 'jwt-decode'

export interface State {
    accessToken: string
    user: { id: number, username: string, email: string, role: string }
    loggedIn: boolean
    redirectUrl: string
    exp: Date,
    error: string
}

const initialState: State = {
    accessToken: "",
    user: null,
    loggedIn: false,
    redirectUrl: "",
    exp: null,
    error: ""
}

export function reducer(state = initialState, action: auth.Actions): State {
    switch (action.type) {
        case auth.ActionTypes.LOGIN_SUCCESS: {
            const token = action.payload

            const accessToken = token

            const tokenPayload = decode(token)

            return Object.assign({}, state, {
                accessToken: accessToken,
                loggedIn: true,
                user: {
                    id: tokenPayload.id,
                    email: tokenPayload.sub,
                    role: tokenPayload.role,
                    username: tokenPayload.username
                }
            })
        }
        case auth.ActionTypes.LOGOUT: {
            return Object.assign({}, initialState)
        }
        default: {
            return state;
        }
    }
}