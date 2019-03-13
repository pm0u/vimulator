import * as types from '../src/redux/constants/vimActions'
import reducer from '../src/redux/reducers/vim'

const initialState = {
    cursorPos: {
        col: 0,
        row: 0
    },
    mode: 'NORMAL',
    furthestCol: 0
}

describe('vim reducer', () => {
    it('should return default state', () => {
        expect(reducer()).toEqual(initialState)
    })
    describe('changeCursorPos', () => {
        it('should set cursor position', () => {
            const expectedState = {
                cursorPos: {
                    row: 0,
                    col: 1
                },
                mode: 'NORMAL',
                furthestCol: 1,
            }
            const expectedState2 = {
                cursorPos: {
                    row: 1,
                    col: 0
                },
                mode: 'NORMAL',
                furthestCol: 0,
            }
            expect(reducer(undefined, {
                type: types.CHANGE_CURSOR_POS,
                position: { col: 1 },
                furthestCol: 1
            })).toEqual(expectedState)
            expect(reducer(undefined, {
                type: types.CHANGE_CURSOR_POS,
                position: { row: 1 }
            })).toEqual(expectedState2)
        })
    })
})