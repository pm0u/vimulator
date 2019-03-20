import * as types from '../constants/vimActions'

export const changeCursorPos = (position = { col: 0, row: 0 }) => ({
    type: types.CHANGE_CURSOR_POS,
    position
})

export const setVimState = vimState => ({
    type: types.SET_VIM_STATE,
    vimState
})

export const changeCursorRow = (rowMove) => {
    return (dispatch, getState) => {
        const { vim: { cursorPos, furthestCol }, currentLesson: { lesson } } = getState()
        let row = cursorPos.row + rowMove
        if (lesson.lessonText.length > row && row >= 0) {
            if (furthestCol <= lesson.lessonText[row].length - 1) {
                dispatch({
                    type: types.CHANGE_CURSOR_POS,
                    position: { row, col: furthestCol }
                })
            } else {
                dispatch({
                    type: types.CHANGE_CURSOR_POS,
                    position: { row, col: lesson.lessonText[row].length - 1 }
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
        const { vim: { cursorPos }, currentLesson: { lesson } } = getState()
        let col = cursorPos.col + colMove
        if (lesson.lessonText[cursorPos.row].length > col && col >= 0) {
            dispatch({
                type: types.CHANGE_CURSOR_POS,
                position: { col },
                furthestCol: col
            })
        } else {
            dispatch(
                {
                    type: types.CHANGE_CURSOR_FAIL
                }
            )
        }
    }
}


export const firstChar = () => {
    return (dispatch) => {
        dispatch({
            type: types.CHANGE_CURSOR_POS,
            position: { col: 0 },
            furthestCol: 0
        })
    }
}

export const lastChar = () => {
    return (dispatch, getState) => {
        const { vim: { cursorPos }, currentLesson: { lesson } } = getState()
        const col = lesson.lessonText[cursorPos.row].length - 1
        dispatch({
            type: types.CHANGE_CURSOR_POS,
            position: { col },
            furthestCol: col
        })
    }
}

export const firstNonEmpty = () => {
    return (dispatch, getState) => {
        const { vim: { cursorPos }, currentLesson: { lesson } } = getState()
        const col = lesson.lessonText[cursorPos.row].search(/\w/)
        dispatch({
            type: types.CHANGE_CURSOR_POS,
            position: { col },
            furthestCol: col
        })
    }
}