import * as types from '../src/redux/constants/actionTypes'
import * as actions from '../src/redux/actions/currentLesson'
import { unit1 } from '../src/Vim/units'

describe('Current lesson actions', () => {
    it('should change current lesson', () => {
        const lessonId = unit1.lessons[1].id
        const expectedAction = {
            type: types.CHANGE_CURRENT_LESSON,
            lessonId
        }
        expect(actions.changeCurrentLesson(lessonId)).toEqual(expectedAction)
    })
})