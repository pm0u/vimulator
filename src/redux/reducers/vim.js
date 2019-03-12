import * as types from '../constants/vimActions'

export const initialState = {
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
        case types.CHANGE_CURSOR_COL:
            return {
                ...state,
                cursorPos: [col, state.cursorPos[1]]
            }
        case types.CHANGE_CURSOR_ROW:
            return {
                ...state,
                cursorPos: [state.cursorPos[0], row]
            }
        default:
            return state
    }
}