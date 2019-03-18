import * as types from '../src/redux/constants/currentLessonActions'
import * as actions from '../src/redux/actions/currentLesson'
import { unit1 } from '../src/Vim/units'
import initialState from '../src/redux/reducers/vim'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Current lesson actions', () => {
    it('should change current lesson', () => {
        const store = mockStore(initialState)
        const lesson = unit1.lessons[1]
        const fakeKeyHandler = () => {}
        const expectedAction = {
            type: types.CHANGE_CURRENT_LESSON,
            newLesson: unit1.lessons[1],
            keyHandler: fakeKeyHandler
        }
        store.dispatch(actions.changeCurrentLesson(lesson, fakeKeyHandler))
        expect(store.getActions()).toContainEqual(expectedAction)
    })
})