import * as types from '../constants/keyHint'


export const showKeyHint = (key) => {
    return dispatch => {
        if (key === ' ') {
            key = 'Space'
        }
        dispatch({
            type: types.SHOW_KEY_HINT,
            key
        })
    }
}

export const hideKeyHint = () => ({
    type: types.HIDE_KEY_HINT
})