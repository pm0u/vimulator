import reduxStore from '../redux/store'
import * as actions from '../redux/actions/vim'

export const grandMasterWizardKeyHandler = (key, store = reduxStore) => {
    // the grandMasterWizardKeyHandler decreeth:
    // let the keyboard do things!
    // huzzah!
    const storeState = store.getState()
    const keys = storeState.currentLesson.keys
    switch (keys[key] && key) {
        case 'h':
            const col = storeState.vim.cursorPos.col - 1
            if (storeState.vim.mode === 'NORMAL') {
                store.dispatch(actions.changeCursorCol(col, storeState.currentLesson))
            }
            break
        case 'l':
            break
        case 'j':
            break
        case 'k':
            break
        default:
            break
    }
}