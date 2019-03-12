import * as types from '../constants/vimActions'

export const changeCursorPos = (position = [0, 0]) => ({
    type: types.CHANGE_CURSOR_POS,
    position
})