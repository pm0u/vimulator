import * as types from '../constants/vimActions'
import store from '../store'
import { bindActionCreators } from 'redux';

export const changeCursorPos = (position = [0, 0]) => ({
    type: types.CHANGE_CURSOR_POS,
    position
})

export const changeCursorRow = (rowMove, lesson = store.getState().currentLesson.lesson) => {
    const { cursorPos, furthestCol } = store.getState().vim
    const row = cursorPos.row + rowMove
    if (lesson.lessonText.length > row && row >= 0) {
        return dispatch => {
            dispatch({
                type: types.CHANGE_CURSOR_POS,
                position: { row }
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

export const changeCursorCol = (colMove, lesson = store.getState().currentLesson.lesson) => {
    let { cursorPos, furthestCol } = store.getState().vim
    let col = cursorPos.col + colMove
    if (lesson.lessonText[cursorPos.row].length > col && col >= 0) {
        return dispatch => {
            if (col > furthestCol || col < cursorPos.col) {
                furthestCol = col
            }
            dispatch({
                type: types.CHANGE_CURSOR_POS,
                position: { col },
                furthestCol
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