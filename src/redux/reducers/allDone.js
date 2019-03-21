import * as types from '../constants/allDoneActions'

const initialState = false

export default (state = initialState, action) => {
    switch (action.type) {

        case types.TOGGLE_ALL_DONE:
            return !state
        case types.CLOSE_ALL_DONE:
            return false
        case types.OPEN_ALL_DONE:
            return true
        default:
            return state
    }
}