import * as types from '../src/redux/constants/actionTypes'
import reducer from '../src/redux/reducers/currentLesson'
import { unit1 } from '../src/Vim/units'

describe('lessons reducer', () => {
    it('should return initial state', () => {
        expect(reducer()).toEqual(null)
    })
    it('should change lesson based on id', () => {
        const lessonId = unit1.lessons[0].id
        const lessonId2 = unit1.lessons[1].id
        expect(reducer(null, {
            type: types.CHANGE_CURRENT_LESSON,
            lessonId
        })).toEqual(unit1.lessons[0])
        expect(reducer(null, {
            type: types.CHANGE_CURRENT_LESSON,
            lessonId: lessonId2
        })).toEqual(unit1.lessons[1])

    })
})