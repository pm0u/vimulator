import * as types from '../constants/vimActions'
import store from '../store'
import { bindActionCreators } from 'redux';

export const changeCursorPos = (position = { col: 0, row: 0 }) => ({
    type: types.CHANGE_CURSOR_POS,
    position
})

export const changeCursorRow = (rowMove) => {
    return (dispatch, getState) => {
        const { vim: { cursorPos }, currentLesson: lesson } = getState()
        let row = cursorPos.row + rowMove
        if (lesson.lessonText.length > row && row >= 0) {
            if (lesson.lessonText[row].length - 1 < cursorPos.col) {
                dispatch({
                    type: types.CHANGE_CURSOR_POS,
                    position: { row, col: lesson.lessonText[row].length - 1 }
                })
            } else {
                dispatch({
                    type: types.CHANGE_CURSOR_POS,
                    position: { row }
                })
            }
        } else {
            dispatch(
                {
                    type: types.CHANGE_CURSOR_FAIL
                }
            )
        }
    }
}

export const changeCursorCol = colMove => {
    return (dispatch, getState) => {
        const { vim: { cursorPos, furthestCol }, currentLesson: lesson } = getState()
        let col = cursorPos.col + colMove
        if (lesson.lessonText[cursorPos.row].length > col && col >= 0) {
            if (col > furthestCol || col < cursorPos.col) {
                dispatch({
                    type: types.CHANGE_CURSOR_POS,
                    position: { col },
                    furthestCol: col
                })
            } else {
                dispatch({
                    type: types.CHANGE_CURSOR_POS,
                    position: { col },
                    furthestCol
                })
            }
        } else {
            dispatch(
                {
                    type: types.CHANGE_CURSOR_FAIL
                }
            )
        }
    }
}