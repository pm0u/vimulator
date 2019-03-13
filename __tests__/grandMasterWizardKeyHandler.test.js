import configureStore from 'redux-mock-store'
import { unit1 } from '../src/Vim/units'
import { grandMasterWizardKeyHandler } from '../src/Vim/grandMasterWizardKeyHandler'
import * as types from '../src/redux/constants/vimActions'
import thunk from 'redux-thunk'
const middlewares = [thunk];
const mockStore = configureStore(middlewares);



const initialState = {
    vim: {
        cursorPos: {
            col: 0,
            row: 0
        },
        mode: 'NORMAL',
        furthestCol: 0
    },
    currentLesson: unit1.lessons[0]
}

describe('grandMasterWizardKeyHandler', () => {
    it('should dispatch a cursormove when h is pressed', () => {
        const store = mockStore(initialState)
        const expectedAction = {
            type: types.CHANGE_CURSOR_FAIL
        }
        grandMasterWizardKeyHandler('h', store)
        const storeActions = store.getActions()

        expect(storeActions).toContainEqual(expectedAction)
    })

})