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
                cursorPos: {...state.cursorPos, ...action.position},
                furthestCol: action.furthestCol ? action.furthestCol : state.furthestCol
            }
        default:
            return state
    }
}