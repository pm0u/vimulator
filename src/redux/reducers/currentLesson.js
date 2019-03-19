import * as types from '../constants/currentLessonActions'
import * as userTypes from '../constants/userActions'
import * as finishTypes from '../constants/finishConditionActions'

const initialState = {
    unit: null,
    lesson: null,
    keyHandler: null
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.CHANGE_CURRENT_LESSON:
            return { lesson: action.newLesson, unit: action.unit, keyHandler: action.keyHandler }
        case userTypes.LOGOUT_USER:
            return initialState
        default:
            return state
    }
}