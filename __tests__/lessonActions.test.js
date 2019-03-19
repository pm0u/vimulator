import * as types from '../src/redux/constants/currentLessonActions'
import * as actions from '../src/redux/actions/currentLesson'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { initialState } from './mockState'


console.log(initialState)

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Current lesson actions', () => {
    it('should change current lesson', () => {
        const store = mockStore(initialState)
        const lesson = store.getState().units.lessons[1]
        const fakeKeyHandler = () => { }
        const expectedAction = {
            type: types.CHANGE_CURRENT_LESSON,
            newLesson: lesson,
            keyHandler: fakeKeyHandler
        }
        store.dispatch(actions.changeCurrentLesson(lesson, fakeKeyHandler))
        expect(store.getActions()).toContainEqual(expectedAction)
    })
})