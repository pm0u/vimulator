import * as types from '../constants/currentLessonActions'
import * as userTypes from '../constants/userActions'

const initialState = {
    unit: null,
    lesson: null,
    keyHandler: null
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.CHANGE_CURRENT_LESSON:
            return { lesson: action.newLesson, unit: action.unit, keyHandler: action.keyHandler }
        case types.NO_LESSON:
        case userTypes.LOGOUT_USER:
            return initialState
        default:
            return state
    }
}