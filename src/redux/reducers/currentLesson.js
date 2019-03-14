import * as types from '../constants/currentLessonActions'

const initialState = {
    lesson: null,
    keyHandler: null
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.CHANGE_CURRENT_LESSON:
            return { lesson: action.newLesson, keyHandler: action.keyHandler }
        default:
            return state
    }
}