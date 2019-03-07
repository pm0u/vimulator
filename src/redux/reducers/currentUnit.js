import { unit1 } from '../../Vim/units'
import { CHANGE_CURRENT_LESSON } from '../actions/currentUnit'

const initialState = null

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_LESSON:
            let newLesson = unit1.lessons.filter(lesson => lesson.id === action.payload)[0]
            return newLesson 
        default:
            return state
    }
}