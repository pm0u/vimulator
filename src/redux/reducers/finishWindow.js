import * as types from '../constants/finishConditionActions'
import * as currentLessonTypes from '../constants/currentLessonActions'

const initialState = false

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LESSON_FINISHED:
            return true
        case types.CLOSE_FINISH_WINDOW:
        case types.LESSON_UNFINISHED:
        case currentLessonTypes.CHANGE_CURRENT_LESSON:
            return false
        default:
            return state
    }
}