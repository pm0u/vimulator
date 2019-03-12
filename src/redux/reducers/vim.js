import * as types from '../constants/vimActions'

const initialState = {
    cursorPos: [0, 0],
    mode: 'NORMAL',
    furthestCol: 0
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.CHANGE_CURSOR_POS:
            return {
                ...state,
                cursorPos: action.position
            }
        default:
            return state
    }
}