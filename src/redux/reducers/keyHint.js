import * as types from '../constants/keyHint'

const initialState = {
    key: null,
    showHint: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_KEY_HINT:
            return ({
                key: action.key,
                showHint: true
            })
        case types.HIDE_KEY_HINT:
            return ({
                key: null,
                showHint: false
            })
        default:
            return state
    }
}