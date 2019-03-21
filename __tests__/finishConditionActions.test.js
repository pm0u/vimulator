import * as types from '../src/redux/constants/finishConditionActions'
import * as actions from '../src/redux/actions/finishCondition'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { initialState } from './mockState'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Finish condition Actions', () => {
    it('should do nothing if finish condition not met', () => {
        const store = mockStore(initialState)

        store.dispatch(actions.checkFinishCondition())
        expect(store.getActions().length).toEqual(0)
    })
    it('should emit action when finish condition met', () => {
        const testState = {
            ...initialState,
            currentLesson: {
                ...initialState.currentLesson,
                lesson: initialState.units[0].lessons[1]
            },
            vim: {
                ...initialState.vim,
                ...initialState.units[0].lessons[1].finishCond
            }
        }
        const expectedAction = {
            type: types.LESSON_FINISHED
        }
        const store = mockStore(testState)

        store.dispatch(actions.checkFinishCondition())
        expect(store.getActions()).toContainEqual(expectedAction)
    })
    it('should handle finish with multiple conditions', () => {
        const testState = {
            ...initialState,
            currentLesson: {
                ...initialState.currentLesson,
                lesson: initialState.units[0].lessons[0]
            },
            vim: {
                ...initialState.vim,
                cursorPos: {
                    ...initialState.units[0].lessons[0].finishCond.cursorPos,
                    row: 0
                }
            }
        }

        const expectedAction = {
            type: types.LESSON_FINISHED
        }
        const store = mockStore(testState)

        store.dispatch(actions.checkFinishCondition())
        expect(store.getActions()).toContainEqual(expectedAction)
    })
})