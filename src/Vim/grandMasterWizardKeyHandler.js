//import store from '../redux/store'
import keyHandler from './keys'

export default (e) => {
    return (dispatch, getState) => {
        // the grandMasterWizardKeyHandler decreeth:
        // let the keyboard do things!
        // huzzah!
        const key = e.key
        const { currentLesson: { lesson: { keys } }, vim: { mode } } = getState()
        if (keys[key]) {
            keyHandler[mode][key](dispatch)
        }
    }
}