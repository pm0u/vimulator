import * as types from '../constants/allDoneActions'

const initialState = false

export default (state = initialState, action) => {
    switch (action.type) {

        case types.TOGGLE_ALL_DONE:
            return !state
        default:
            return state
    }
}