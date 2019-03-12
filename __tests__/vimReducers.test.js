import * as types from '../src/redux/constants/vimActions'
import reducer from '../src/redux/reducers/vim'

const initialState = {
    cursorPos: [0, 0],
    mode: 'NORMAL',
    furthestCol: 0
}

describe('vim reducer', () => {
    it('should return default state', () => {
        expect(reducer()).toEqual(initialState)
    })
    describe('changeCursorPos', () => {
        it('should set cursor position and furthestCol', () => {
            const expectedState = {
                cursorPos: [0, 1],
                mode: 'NORMAL',
                furthestCol: 0,
            }
            const expectedState2 = {
                cursorPos: [1, 0],
                mode: 'NORMAL',
                furthestCol: 0,
            }
            expect(reducer(undefined, {
                type: types.CHANGE_CURSOR_POS,
                position: [0, 1]
            })).toEqual(expectedState)
            expect(reducer(undefined, {
                type: types.CHANGE_CURSOR_POS,
                position: [1, 0]
            })).toEqual(expectedState2)
        })
    })
})