import * as types from '../src/redux/constants/currentLessonActions'
import reducer from '../src/redux/reducers/currentLesson'
import { unit1 } from '../src/units'

xdescribe('lessons reducer', () => {
    it('should return initial state', () => {
        const initialState = {
            lesson: null,
            keyHandler: null,
            unit: null
        }
        expect(reducer()).toEqual(initialState)
    })
    it('should change lesson based on id', () => {
        const fakeKeyHandler = () => { }
        const lesson = unit1.lessons[0]
        const lesson2 = unit1.lessons[1]
        expect(reducer(null, {
            type: types.CHANGE_CURRENT_LESSON,
            newLesson: lesson,
            unit: unit1,
            keyHandler: fakeKeyHandler
        })).toEqual({ lesson: unit1.lessons[0], unit: unit1, keyHandler: fakeKeyHandler })
        expect(reducer(null, {
            type: types.CHANGE_CURRENT_LESSON,
            newLesson: lesson2,
            unit: unit1,
            keyHandler: fakeKeyHandler
        })).toEqual({ lesson: unit1.lessons[1], unit: unit1, keyHandler: fakeKeyHandler })

    })
})