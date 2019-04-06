import * as actions from '../vim'

export default {
    '_h': (dispatch) => dispatch(actions.changeCursorCol(-1)),
    '_j': (dispatch) => dispatch(actions.changeCursorRow(1)),
    '_k': (dispatch) => dispatch(actions.changeCursorRow(-1)),
    '_l': (dispatch) => dispatch(actions.changeCursorCol(1)),
    '_0': (dispatch) => dispatch(actions.firstChar()),
    '_$': (dispatch) => dispatch(actions.lastChar()),
    '_^': (dispatch) => dispatch(actions.firstNonEmpty()),
    '__': (dispatch) => dispatch(actions.firstNonEmpty()),
    '_-': (dispatch) => dispatch(actions.upAndFirstNonEmpty()),
    '_+': (dispatch) => dispatch(actions.downAndFirstNonEmpty()),
    '_f': () => actions.awaitCharToMoveTo('f'),
    '_F': () => actions.awaitCharToMoveTo('F'),
    '_t': () => actions.awaitCharToMoveTo('t'),
    '_T': () => actions.awaitCharToMoveTo('T'),
}