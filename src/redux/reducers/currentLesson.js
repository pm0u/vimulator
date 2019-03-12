import { unit1 } from '../../Vim/units'
import * as types from '../constants/currentLessonActions'

const initialState = null

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.CHANGE_CURRENT_LESSON:
            let newLesson = unit1.lessons.filter(lesson => lesson.id === action.lessonId)[0]
            return newLesson 
        default:
            return state
    }
}