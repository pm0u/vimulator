import * as types from '../constants/vimActions'

export const initialState = {
    cursorPos: {
        col: 0,
        row: 0
    },
    mode: 'NORMAL',
    furthestCol: 0
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.CHANGE_CURSOR_POS:
            return {
                ...state,
                cursorPos: {...state.cursorPos, ...action.position}
            }
        case types.CHANGE_CURSOR_COL:
            return {
                ...state,
                cursorPos: { ...state.cursorPos, col: action.position.col }
            }
        case types.CHANGE_CURSOR_ROW:
            return {
                ...state,
                cursorPos: { ...state.cursorPos, row: action.position.row }
            }
        default:
            return state
    }
}