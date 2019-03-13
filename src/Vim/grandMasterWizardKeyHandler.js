import * as actions from '../redux/actions/vim'

export const grandMasterWizardKeyHandler = (key, keys, mode) => {
    // the grandMasterWizardKeyHandler decreeth:
    // let the keyboard do things!
    // huzzah!
    switch (keys[key] && key) {
        case 'h':
            if (mode === 'NORMAL') {
                return actions.changeCursorCol(-1)
            }
            break
        case 'l':
            if (mode === 'NORMAL') {
                return actions.changeCursorCol(1)
            }
            break
        case 'j':
            if (mode === 'NORMAL') {
                return actions.changeCursorRow(1)
            }
            break
        case 'k':
            if (mode === 'NORMAL') {
                return actions.changeCursorRow(-1)
            }
            break
        default:
            break
    }
}