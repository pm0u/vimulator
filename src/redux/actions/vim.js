import * as types from '../constants/vimActions'
import { checkFinishCondition } from './finishCondition'
import keyhandler from './grandMasterWizardKeyHandler'
import store from '../store'

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
        dispatch(checkFinishCondition())
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
        dispatch(checkFinishCondition())
    }
}


export const firstChar = () => {
    return (dispatch) => {
        dispatch({
            type: types.CHANGE_CURSOR_POS,
            position: { col: 0 },
            furthestCol: 0
        })
        dispatch(checkFinishCondition())
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
        dispatch(checkFinishCondition())
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
        dispatch(checkFinishCondition())
    }
}

export const downAndFirstNonEmpty = () => {
    return (dispatch, getState) => {
        const row = getState().vim.cursorPos.row
        dispatch(changeCursorRow(1))
        const newRow = getState().vim.cursorPos.row
        if (newRow !== row) {
            dispatch(firstNonEmpty())
        }
        dispatch(checkFinishCondition())
    }
}

export const upAndFirstNonEmpty = () => {
    return (dispatch, getState) => {
        const row = getState().vim.cursorPos.row
        dispatch(changeCursorRow(-1))
        const newRow = getState().vim.cursorPos.row
        if (newRow !== row) {
            dispatch(firstNonEmpty())
        }
        dispatch(checkFinishCondition())
    }
}


export const endAwaitCharToMoveTo = (reference) => {
    document.removeEventListener('keydown', reference)
    document.addEventListener('keydown', keyhandler)
}

const toNextChar = (e) => {
    const { vim: { cursorPos }, currentLesson: { lesson: { lessonText } } } = store.getState()
    const key = e.key
    if (e.key !== 'Shift') {
        const distanceToLetter = lessonText[cursorPos.row].slice(cursorPos.col + 1).indexOf(key) + 1
        if (distanceToLetter !== -1 && key !== 'Escape') {
            store.dispatch(changeCursorCol(distanceToLetter))
        }
        endAwaitCharToMoveTo(goToChar['f'])
    }
}

const toPrevChar = (e) => {
    const { vim: { cursorPos }, currentLesson: { lesson: { lessonText } } } = store.getState()
    const key = e.key
    if (e.key !== 'Shift') {
        const distanceToLetter = lessonText[cursorPos.row].slice(0, cursorPos.col).split('').reverse().join('').indexOf(key) + 1
        if (distanceToLetter !== -1 && key !== 'Escape') {
            store.dispatch(changeCursorCol(-(distanceToLetter)))
        }
        endAwaitCharToMoveTo(goToChar['F'])
    }
}

const beforeNextChar = (e) => {
    const { vim: { cursorPos }, currentLesson: { lesson: { lessonText } } } = store.getState()
    const key = e.key
    if (e.key !== 'Shift') {
        const distanceToLetter = lessonText[cursorPos.row].slice(cursorPos.col + 1).indexOf(key)
        if (distanceToLetter !== -1 && key !== 'Escape') {
            store.dispatch(changeCursorCol(distanceToLetter))
        }
        endAwaitCharToMoveTo(goToChar['t'])
    }
}

const beforePrevChar = (e) => {
    const { vim: { cursorPos }, currentLesson: { lesson: { lessonText } } } = store.getState()
    const key = e.key
    if (e.key !== 'Shift') {
        const distanceToLetter = lessonText[cursorPos.row].slice(0, cursorPos.col).split('').reverse().join('').indexOf(key)
        if (distanceToLetter !== -1 && key !== 'Escape') {
            store.dispatch(changeCursorCol(-(distanceToLetter)))
        }
        endAwaitCharToMoveTo(goToChar['T'])
    }
}

export const awaitCharToMoveTo = (key) => {
    document.removeEventListener('keydown', keyhandler)
    document.addEventListener('keydown', goToChar[key])
}

const goToChar = {
    'f': toNextChar,
    'F': toPrevChar,
    't': beforeNextChar,
    'T': beforePrevChar
}