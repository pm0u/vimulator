import * as types from '../constants/currentLessonActions'
import * as userTypes from '../constants/userActions'
import * as finishTypes from '../constants/finishConditionActions'

const initialState = {
    lesson: null,
    keyHandler: null
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.CHANGE_CURRENT_LESSON:
            return { lesson: action.newLesson, keyHandler: action.keyHandler }
        case userTypes.LOGOUT_USER:
            return initialState
        default:
            return state
    }
}