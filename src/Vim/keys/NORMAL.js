import * as actions from '../../redux/actions/vim'

export default {
    h: (dispatch) => dispatch(actions.changeCursorCol(-1)),
    j: (dispatch) => dispatch(actions.changeCursorRow(1)),
    k: (dispatch) => dispatch(actions.changeCursorRow(-1)),
    l: (dispatch) => dispatch(actions.changeCursorCol(1)),
}