import store from   '../store' 
import keyHandler from './keys'
import { showKeyHint } from './keyHint'


const ignoreKeys = {
    'Shift':true,
    'Alt':true,
    'Meta':true,
    'Control':true
}

export default (e) => {
    // the grandMasterWizardKeyHandler decreeth:
    // let the keyboard do things!
    // huzzah!
    let key = e.key
    const { currentLesson: { lesson: { keys } }, vim: { mode } } = store.getState()
    if (keys[`_${key}`]) { // include underscore because mongodb can't have keys starting with $
        keyHandler[mode][`_${key}`](store.dispatch)
    } else {
        //or don't.
        // display a warning/error/hint thing
        if (!ignoreKeys[key]) store.dispatch(showKeyHint(key))
    }
}