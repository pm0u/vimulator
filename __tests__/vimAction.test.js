
import * as types from '../src/redux/constants/vimActions'
import * as actions from '../src/redux/actions/vim'
import { unit1 } from '../src/Vim/units'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import currentLesson from '../src/redux/reducers/currentLesson';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
    vim: {
        cursorPos: unit1.lessons[0].cursorPos,
        mode: 'NORMAL',
        furthestCol: 0
    },
    currentLesson: unit1.lessons[0]
}

describe('vim actions', () => {
    describe('cursorPos', () => {
        it('should default to [0,0]', () => {
            const position = { col: 0, row: 0 }
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
            const rowMove = 2
            const row = rowMove + store.getState().vim.cursorPos.row
            const expectedAction = {
                type: types.CHANGE_CURSOR_POS,
                position: { row }
            }
            store.dispatch(actions.changeCursorRow(rowMove))
            const storeActions = store.getActions()
            expect(storeActions).toContainEqual(expectedAction)
        })
        it('should not allow to go to rows that don\'t exist', () => {
            const store = mockStore(initialState)
            const row = 5
            const expectedAction = {
                type: types.CHANGE_CURSOR_FAIL
            }
            store.dispatch(actions.changeCursorRow(row))
            store.dispatch(actions.changeCursorRow(-1))
            const storeActions = store.getActions()
            expect(storeActions).toContainEqual(expectedAction)
            expect(storeActions).not.toContainEqual({ type: types.CHANGE_CURSOR_POS, row })
            expect(storeActions).not.toContainEqual({ type: types.CHANGE_CURSOR_POS, row: -1 })

        })
        it('should adjust col on row changes, save furthestcol', () => {
            const testState = {
                ...initialState,
                vim: {
                    ...initialState.vim,
                    cursorPos: { col: 29, row: 1 },
                    furthestCol: 29
                }
            }
            const store = mockStore(testState)
            const col = store.getState().currentLesson.lessonText[2].length - 1
            const expectedActions = {
                type: types.CHANGE_CURSOR_POS,
                position: { row: 2, col },
            }
            store.dispatch(actions.changeCursorRow(1))
            const storeActions = store.getActions()
            expect(storeActions).toContainEqual(expectedActions)
        })
    })
    describe('changeCursorCol', () => {
        it('should change cursor col', () => {
            const store = mockStore(initialState)
            const colMove = 5
            const col = colMove + store.getState().vim.cursorPos.col
            const expectedAction = {
                type: types.CHANGE_CURSOR_POS,
                position: { col },
                furthestCol: col
            }
            store.dispatch(actions.changeCursorCol(colMove))
            const storeActions = store.getActions()
            expect(storeActions).toContainEqual(expectedAction)
        })
        it('should not allow to go to columns that don\'t exist', () => {
            const store = mockStore(initialState)
            const col = 25
            const expectedAction = {
                type: types.CHANGE_CURSOR_FAIL
            }
            store.dispatch(actions.changeCursorCol(col))
            store.dispatch(actions.changeCursorCol(-1))
            const storeActions = store.getActions()
            expect(storeActions).toContainEqual(expectedAction)
            expect(storeActions).not.toContainEqual({ type: types.CHANGE_CURSOR_POS, col })
            expect(storeActions).not.toContainEqual({ type: types.CHANGE_CURSOR_POS, col: -1 })
        })
    })

    describe('furthestCol', () => {
        it('should change with cursor movement', () => {
            const store = mockStore(initialState)
            const colMove = 11
            const col = store.getState().vim.cursorPos.col + colMove
            const expectedAction =
            {
                type: types.CHANGE_CURSOR_POS,
                position: { col },
                furthestCol: col
            }

            store.dispatch(actions.changeCursorCol(colMove))
            const storeActions = store.getActions()
            expect(storeActions).toContainEqual(expectedAction)
        })
    })
})