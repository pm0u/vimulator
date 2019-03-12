
import * as types from '../src/redux/constants/vimActions'
import * as actions from '../src/redux/actions/vim'
import { unit1 } from '../src/Vim/units'
import initialState from '../src/redux/reducers/vim'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('vim actions', () => {
    describe('cursorPos', () => {

        it('should default to [0,0]', () => {
            const position = [0, 0]
            const expectedAction = {
                type: types.CHANGE_CURSOR_POS,
                position
            }
            expect(actions.changeCursorPos()).toEqual(expectedAction)
        })
    })
    describe('changeCursorRow', () => {
        it('should change cursor row', () => {
            const store = mockStore(initialState)
            const row = 3
            const expectedAction = {
                type: types.CHANGE_CURSOR_ROW,
                row
            }
            store.dispatch(actions.changeCursorRow(row, unit1.lessons[0]))
            const storeActions = store.getActions()
            expect(storeActions).toContainEqual(expectedAction)
        })
        it('should not allow to go to rows that don\'t exist', () => {
            const store = mockStore(initialState)
            const row = 5
            const expectedAction = {
                type: types.CHANGE_CURSOR_FAIL
            }
            store.dispatch(actions.changeCursorRow(row, unit1.lessons[0]))
            store.dispatch(actions.changeCursorRow(-1, unit1.lessons[0]))
            const storeActions = store.getActions()
            expect(storeActions).toContainEqual(expectedAction)
            expect(storeActions).not.toContainEqual({type: types.CHANGE_CURSOR_ROW, row})
            expect(storeActions).not.toContainEqual({type: types.CHANGE_CURSOR_ROW, row:-1})

        })
    })
    describe('changeCursorCol', () => {
        it('should change cursor col', () => {
            const store = mockStore(initialState)
            const col = 5
            const expectedAction = {
                type: types.CHANGE_CURSOR_COL,
                col
            }
            store.dispatch(actions.changeCursorCol(col, unit1.lessons[0]))
            const storeActions = store.getActions()
            expect(storeActions).toContainEqual(expectedAction)
        })
        it('should not allow to go to columns that don\'t exist', () => {
            const store = mockStore(initialState)
            const col = 25
            const expectedAction = {
                type: types.CHANGE_CURSOR_FAIL
            }
            store.dispatch(actions.changeCursorCol(col, unit1.lessons[0]))
            store.dispatch(actions.changeCursorCol(-1, unit1.lessons[0]))
            const storeActions = store.getActions()
            expect(storeActions).toContainEqual(expectedAction)
            expect(storeActions).not.toContainEqual({type: types.CHANGE_CURSOR_COL, col})
            expect(storeActions).not.toContainEqual({type: types.CHANGE_CURSOR_COL, col:-1})
        })
    })

    describe('furthestCol', () => {
        it('should change with cursor movement', () => {

        })
    })
})