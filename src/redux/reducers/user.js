import * as types from '../constants/userActions'

const initialState = {}


export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USERDATA_SUCCESS:
            return action.user
        default:
            return state
    }
}