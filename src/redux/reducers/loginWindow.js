import * as types from '../constants/loginWindowActions'

const initialState = false


export default (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_LOGIN_WINDOW:
            return !state
        default:
            return state
    }

}