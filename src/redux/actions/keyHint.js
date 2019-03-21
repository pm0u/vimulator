import * as types from '../constants/keyHint'


export const showKeyHint = (key) => ({
    type: types.SHOW_KEY_HINT,
    key
})

export const hideKeyHint = () => ({
    type: types.HIDE_KEY_HINT
})