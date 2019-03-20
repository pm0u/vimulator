import store from '../../redux/store'
import * as actions from '../../redux/actions/vim'

export default {
    h: () => store.dispatch(actions.changeCursorCol(-1)),
    j: () => store.dispatch(actions.changeCursorRow(1)),
    k: () => store.dispatch(actions.changeCursorRow(-1)),
    l: () => store.dispatch(actions.changeCursorCol(1)),
}