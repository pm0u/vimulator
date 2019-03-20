import * as types from '../src/redux/constants/currentLessonActions'
import * as actions from '../src/redux/actions/currentLesson'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { initialState } from './mockState'
import keyHandler from '../src/Vim/keyHandler'

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Current lesson actions', () => {
    xit('should change current lesson', () => {
        const store = mockStore(initialState)
        const unit = store.getState().units[0]
        const lesson = unit.lessons[1]
        const expectedAction = {
            type: types.CHANGE_CURRENT_LESSON,
            newLesson: lesson,
            unit,
            keyHandler: (e) => { keyHandler(e)}
        }

        store.dispatch(actions.changeCurrentLesson(lesson, unit))
        expect(store.getActions()).toContainEqual(expectedAction)
    })
})