import * as actions from '../vim'

export default {
    h: (dispatch) => dispatch(actions.changeCursorCol(-1)),
    j: (dispatch) => dispatch(actions.changeCursorRow(1)),
    k: (dispatch) => dispatch(actions.changeCursorRow(-1)),
    l: (dispatch) => dispatch(actions.changeCursorCol(1)),
    0: (dispatch) => dispatch(actions.firstChar()),
    '_$': (dispatch) => dispatch(actions.lastChar()),
    '^': (dispatch) => dispatch(actions.firstNonEmpty()),
    '_': (dispatch) => dispatch(actions.firstNonEmpty()),
    '-': (dispatch) => dispatch(actions.upAndFirstNonEmpty()),
    '+': (dispatch) => dispatch(actions.downAndFirstNonEmpty())
}