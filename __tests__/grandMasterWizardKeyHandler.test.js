import { grandMasterWizardKeyHandler } from '../src/Vim/grandMasterWizardKeyHandler'
import * as types from '../src/redux/constants/vimActions'
import * as actions from '../src/redux/actions/vim'


xdescribe('grandMasterWizardKeyHandler', () => {
    describe('--NORMAL--', () => {
        it('should dispatch a cursormove when h is pressed', () => {
            const expectedAction = types.CHANGE_CURSOR_FAIL
            expect(grandMasterWizardKeyHandler('h', { h: true }, 'NORMAL')).toEqual(expectedAction)

        })
    })

})