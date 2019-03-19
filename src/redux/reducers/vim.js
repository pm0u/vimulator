import * as types from '../constants/vimActions'
import * as currentLessonTypes from '../constants/currentLessonActions'

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
                cursorPos: { ...state.cursorPos, ...action.position },
                furthestCol: action.furthestCol >= 0 ? action.furthestCol : state.furthestCol
            }
        case currentLessonTypes.CHANGE_CURRENT_LESSON:
            return {
                ...state,
                cursorPos: action.newLesson.cursorPos,
                furthestCol: action.newLesson.cursorPos.col,
                mode: 'NORMAL'
            }
        case types.SET_VIM_STATE:
            return {
                ...action.vimState
            }
        default:
            return state
    }
}