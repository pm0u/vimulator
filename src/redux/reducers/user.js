import * as types from '../constants/userActions'

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.POST_USERDATA_SUCCESS:
        case types.FETCH_USERDATA_SUCCESS:
            return action.user
        case types.UPDATE_LESSON:
            return { ...state, lessons: { ...state.lessons, ...action.lesson } }
        case types.LOGOUT_USER:
            return initialState
        default:
            return state
    }
}