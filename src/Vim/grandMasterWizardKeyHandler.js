import store from '../redux/store'
import keyHandler from './keys'

export default (e) => {
    // the grandMasterWizardKeyHandler decreeth:
    // let the keyboard do things!
    // huzzah!
    let key = e.key
    if (key === '$') key = '_$'
    const { currentLesson: { lesson: { keys } }, vim: { mode } } = store.getState()
    if (keys[key]) {
        keyHandler[mode][key](store.dispatch)
    } else {
        // display a warning/error/hint thing
    }
}