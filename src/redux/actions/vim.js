import * as types from '../constants/vimActions'
import store from '../store'
import { bindActionCreators } from 'redux';

export const changeCursorPos = (position = [0, 0]) => ({
    type: types.CHANGE_CURSOR_POS,
    position
})

export const changeCursorRow = (row, lesson = store.getState().currentLesson, cursor = store.getState().vim.cursorPos) => {
    if (lesson.lessonText.length >= row && row >= 0) {
        return dispatch => {
            dispatch({
                type: types.CHANGE_CURSOR_ROW,
                row
            })
        }
    } else {
        return dispatch => {
            dispatch(
                {
                    type: types.CHANGE_CURSOR_FAIL
                }
            )
        }
    }
}

export const changeCursorCol = (col, lesson = store.getState().currentLesson, cursor = store.getState().vim.cursorPos) => {
    if (lesson.lessonText[cursor[1]].length >= col && col >= 0) {
        return dispatch => {
            dispatch({
                type: types.CHANGE_CURSOR_COL,
                col
            })
        }
    } else {
        return dispatch => {
            dispatch(
                {
                    type: types.CHANGE_CURSOR_FAIL
                }
            )
        }
    }
}