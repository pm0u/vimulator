import grandMasterWizardKeyHandler from '../src/Vim/grandMasterWizardKeyHandler'
import * as types from '../src/redux/constants/vimActions'
import * as actions from '../src/redux/actions/vim'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { initialState } from './mockState'
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

xdescribe('grandMasterWizardKeyHandler', () => {
    describe('--NORMAL--', () => {
        describe('h', () => {
            it('should dispatch a -1 cursormove when h is pressed', () => {
                const store = mockStore(initialState)
                const expectedAction = {
                    type: types.CHANGE_CURSOR_POS,
                    furthestCol: initialState.vim.furthestCol - 1,
                    position: {
                        col: initialState.vim.cursorPos.col - 1
                    }
                }
                store.dispatch(grandMasterWizardKeyHandler({key:'h'}))
                expect(store.getActions()).toContainEqual(expectedAction)
            })
            it('should do nothing when h is disabled', () => {

            })
        })
        describe('j', () => {
            it('should dispatch a +1 row when j is pressed', () => {
                const expectedAction = { action: actions.changeCursorRow, params: [1] }
                expect(grandMasterWizardKeyHandler('j', { j: true }, 'NORMAL')).toEqual(expectedAction)
            })
            it('should do nothing when j is disabled', () => {
                expect(grandMasterWizardKeyHandler('j', { j: false }, 'NORMAL')).toBeUndefined()
            })
        })
        describe('k', () => {
            it('should dispatch a -1 row when k is pressed', () => {
                const expectedAction = { action: actions.changeCursorRow, params: [-1] }
                expect(grandMasterWizardKeyHandler('k', { k: true }, 'NORMAL')).toEqual(expectedAction)
            })
            it('should do nothing when k is disabled', () => {
                expect(grandMasterWizardKeyHandler('k', { k: false }, 'NORMAL')).toBeUndefined()
            })
        })
        describe('l', () => {
            it('should dispatch a +1 col when l is pressed', () => {
                const expectedAction = { action: actions.changeCursorCol, params: [1] }
                expect(grandMasterWizardKeyHandler('l', { l: true }, 'NORMAL')).toEqual(expectedAction)
            })
            it('should do nothing when l is disabled', () => {
                expect(grandMasterWizardKeyHandler('l', { l: false }, 'NORMAL')).toBeUndefined()
            })
        })
    })

})