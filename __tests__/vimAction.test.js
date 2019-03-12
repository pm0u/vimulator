
import * as types from '../src/redux/constants/vimActions'
import * as actions from '../src/redux/actions/vim'

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
})