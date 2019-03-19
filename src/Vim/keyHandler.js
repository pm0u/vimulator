import store from '../redux/store'
import { grandMasterWizardKeyHandler } from './grandMasterWizardKeyHandler'

export default (e) => {
    console.log(e.key, 'pressed')
    const keys = store.getState().currentLesson.lesson.keys
    const mode = store.getState().vim.mode
    const actions = grandMasterWizardKeyHandler(e.key, keys, mode)
    if (actions) store.dispatch(actions.action(...actions.params))
}